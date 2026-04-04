import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getRegion, isGateUnlocked } from '../data/regions/index'
import { TILE_META } from '../data/regions/tileTypes'

export const useExploreStore = create(
  persist(
    (set, get) => ({
      currentRegion: 'city_marmoria',
      playerX: 9,
      playerY: 13,
      facing: 'up',
      isMoving: false,
      grassStepCount: 0,

      // Lost Woods maze progress
      lostWoodsProgress: 0,

      // Encounter state (NOT persisted)
      encounterPhase: 'none',
      encounterPokemon: null,
      encounterQuestion: null,

      move: (direction, badges = [], playerFlags = {}) => {
        const { playerX, playerY, currentRegion, isMoving } = get()
        if (isMoving) return null

        const dirMap = {
          up:    { dx: 0, dy: -1 },
          down:  { dx: 0, dy: 1 },
          left:  { dx: -1, dy: 0 },
          right: { dx: 1, dy: 0 },
        }

        const { dx, dy } = dirMap[direction]
        const newX = playerX + dx
        const newY = playerY + dy

        set({ facing: direction })

        const region = getRegion(currentRegion)
        if (!region) return null

        // Get current tile grid (support maze steps)
        const tiles = get()._getCurrentTiles(region)

        // Bounds check
        if (newX < 0 || newX >= 20 || newY < 0 || newY >= 15) return null

        const tileType = tiles[newY][newX]
        const meta = TILE_META[tileType]
        if (!meta) return null

        // Barrier check
        const mightyBob = playerFlags?.mightyBob
        if (meta.barrier) {
          if (!mightyBob && !badges.includes(meta.unlockBadge)) {
            return { type: 'blocked', message: `Du brauchst den ${meta.unlockBadge}!` }
          }
          // Has badge - walkable
        } else if (!meta.walkable) {
          // Puzzle barrier check
          if (meta.puzzleBarrier) {
            const puzzleState = get().puzzleState || {}
            const key = `${currentRegion}_${newX}_${newY}`
            if (!puzzleState[key]) return null // barrier closed
          } else {
            return null
          }
        }

        // Ledge check (one-way)
        if (meta.ledge) {
          // Can only enter ledge from the correct direction
          if (meta.ledge === 'south' && direction !== 'down') return null
        }

        // Move
        set({ playerX: newX, playerY: newY, isMoving: true })
        setTimeout(() => set({ isMoving: false }), 150)

        // Gate
        if (meta.gate) {
          return { type: 'gate', gate: meta.gate, tileType }
        }

        // Gym door → enter arena interior
        if (meta.gymDoor) {
          const arenaId = `arena_${currentRegion.replace('city_', '')}`
          const arenaRegion = getRegion(arenaId)
          if (arenaRegion) {
            return { type: 'arena', arenaId, gymId: region.gymId }
          }
          // Fallback to old behavior
          return { type: 'gym', gymId: region.gymId }
        }

        // Gym leader tile → trigger battle
        if (meta.gymLeader) {
          return { type: 'gymLeader', gymId: region.gymId }
        }

        // Warp pad
        if (meta.warpPad && region.warpPads) {
          const padKey = `${newX},${newY}`
          const target = region.warpPads[padKey]
          if (target) {
            set({ playerX: target.x, playerY: target.y })
            return { type: 'warp' }
          }
        }

        // Puzzle switch
        if (meta.puzzleSwitch) {
          return { type: 'puzzleSwitch', x: newX, y: newY }
        }

        // Ice floor (slide until hitting wall)
        if (meta.ice) {
          return { type: 'ice', direction }
        }

        // Encounter (tall grass, cave encounter floors)
        if (meta.encounter) {
          const count = get().grassStepCount + 1
          set({ grassStepCount: count })
          const rate = Math.min(0.15 + count * 0.02, 0.35)
          if (Math.random() < rate) {
            set({ grassStepCount: 0 })
            return { type: 'encounter' }
          }
        } else {
          if (get().grassStepCount > 0) {
            set({ grassStepCount: 0 })
          }
        }

        return { type: 'move' }
      },

      // Get current tiles (supports maze steps for Lost Woods)
      _getCurrentTiles: (region) => {
        if (region.mazeSteps) {
          const progress = get().lostWoodsProgress
          return region.mazeSteps[Math.min(progress, region.mazeSteps.length - 1)]
        }
        return region.tiles
      },

      // Handle gate transition with unlock check
      handleGate: (gateDirection, badges, playerFlags) => {
        const region = getRegion(get().currentRegion)
        if (!region?.gates) return { success: false }

        const gate = region.gates[gateDirection]
        if (!gate) return { success: false }

        // Check unlock
        if (!isGateUnlocked(gate, badges, playerFlags)) {
          const msg = gate.requiredBadge
            ? `Dieser Weg ist versperrt! Du brauchst den ${gate.requiredBadge}.`
            : 'Dieser Weg ist versperrt!'
          return { success: false, message: msg }
        }

        // Lost Woods maze logic
        if (region.maze) {
          const { sequence, entranceX, entranceY } = region.maze
          const progress = get().lostWoodsProgress

          if (gateDirection === sequence[progress]) {
            // Correct step
            const nextProgress = progress + 1
            if (nextProgress >= sequence.length) {
              // Maze solved!
              set({ lostWoodsProgress: 0 })
              // Transition to exit
              const exitGate = region.gates[gateDirection]
              if (exitGate) {
                set({
                  currentRegion: exitGate.targetRegion,
                  playerX: exitGate.spawnX,
                  playerY: exitGate.spawnY,
                  grassStepCount: 0,
                })
              }
              return { success: true, mazeComplete: true, targetRegion: exitGate?.targetRegion }
            }
            set({ lostWoodsProgress: nextProgress })
            // Stay in same region but tiles change
            return { success: true, mazeProgress: nextProgress, stayInRegion: true }
          } else {
            // Wrong step - reset
            set({
              lostWoodsProgress: 0,
              playerX: entranceX,
              playerY: entranceY,
            })
            return { success: false, mazeReset: true, message: 'Du hast dich verlaufen...' }
          }
        }

        // Normal gate transition
        set({
          currentRegion: gate.targetRegion,
          playerX: gate.spawnX,
          playerY: gate.spawnY,
          grassStepCount: 0,
        })
        return { success: true, targetRegion: gate.targetRegion }
      },

      // Enter arena interior
      enterArena: (arenaId) => {
        const arena = getRegion(arenaId)
        if (!arena) return false
        set({
          currentRegion: arenaId,
          playerX: arena.spawnX,
          playerY: arena.spawnY,
          grassStepCount: 0,
        })
        return true
      },

      // Legacy compat
      teleportToRegion: (regionId) => {
        const region = getRegion(regionId)
        if (!region) return
        set({
          currentRegion: region.id || regionId,
          playerX: region.spawnX,
          playerY: region.spawnY,
          grassStepCount: 0,
        })
      },

      enterGate: (gateDirection) => {
        const region = getRegion(get().currentRegion)
        if (!region?.gates) return false
        const gate = region.gates[gateDirection]
        if (!gate) return false
        set({
          currentRegion: gate.targetRegion,
          playerX: gate.spawnX,
          playerY: gate.spawnY,
          grassStepCount: 0,
        })
        return true
      },

      // Puzzle state
      puzzleState: {},
      toggleSwitch: (key) => {
        const ps = { ...get().puzzleState }
        ps[key] = !ps[key]
        set({ puzzleState: ps })
      },

      // Encounter
      startEncounter: (pokemon, question) => set({
        encounterPhase: 'transition',
        encounterPokemon: pokemon,
        encounterQuestion: question,
      }),
      setEncounterPhase: (phase) => set({ encounterPhase: phase }),
      resolveEncounter: (caught) => set({ encounterPhase: caught ? 'caught' : 'fled' }),
      clearEncounter: () => set({
        encounterPhase: 'none',
        encounterPokemon: null,
        encounterQuestion: null,
      }),
    }),
    {
      name: 'pokemon-academy-explore',
      partialize: (state) => ({
        currentRegion: state.currentRegion,
        playerX: state.playerX,
        playerY: state.playerY,
        facing: state.facing,
        grassStepCount: state.grassStepCount,
        lostWoodsProgress: state.lostWoodsProgress,
        puzzleState: state.puzzleState,
      }),
    }
  )
)
