import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getRegion } from '../data/regions/index'
import { TILE_META } from '../data/regions/tileTypes'

export const useExploreStore = create(
  persist(
    (set, get) => ({
      currentRegion: 1,
      playerX: 9,
      playerY: 13,
      facing: 'up',
      isMoving: false,
      grassStepCount: 0,

      // Encounter state (NOT persisted via partialize below)
      encounterPhase: 'none', // none|transition|intro|challenge|result|caught|fled
      encounterPokemon: null,
      encounterQuestion: null,

      move: (direction) => {
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

        // Always update facing
        set({ facing: direction })

        const region = getRegion(currentRegion)
        if (!region) return null

        // Bounds check
        if (newX < 0 || newX >= 20 || newY < 0 || newY >= 15) return null

        const tileType = region.tiles[newY][newX]
        const meta = TILE_META[tileType]

        if (!meta?.walkable) return null

        // Move
        set({ playerX: newX, playerY: newY, isMoving: true })
        setTimeout(() => set({ isMoving: false }), 150)

        // Check for gate
        if (meta.gate) {
          return { type: 'gate', gate: meta.gate, tileType }
        }

        // Check for gym door
        if (meta.gymDoor) {
          return { type: 'gym', gymId: region.gymId }
        }

        // Check for encounter (tall grass)
        if (meta.encounter) {
          const count = get().grassStepCount + 1
          set({ grassStepCount: count })
          const rate = Math.min(0.15 + count * 0.02, 0.35)
          if (Math.random() < rate) {
            set({ grassStepCount: 0 })
            return { type: 'encounter' }
          }
        } else {
          // Reset grass counter when leaving tall grass
          if (get().grassStepCount > 0) {
            set({ grassStepCount: 0 })
          }
        }

        return { type: 'move' }
      },

      teleportToRegion: (regionId) => {
        const region = getRegion(regionId)
        if (!region) return
        set({
          currentRegion: regionId,
          playerX: region.spawnX,
          playerY: region.spawnY,
          grassStepCount: 0,
        })
      },

      enterGate: (gateDirection) => {
        const region = getRegion(get().currentRegion)
        if (!region) return false
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

      startEncounter: (pokemon, question) => {
        set({
          encounterPhase: 'transition',
          encounterPokemon: pokemon,
          encounterQuestion: question,
        })
      },

      setEncounterPhase: (phase) => set({ encounterPhase: phase }),

      resolveEncounter: (caught) => {
        set({ encounterPhase: caught ? 'caught' : 'fled' })
      },

      clearEncounter: () => {
        set({
          encounterPhase: 'none',
          encounterPokemon: null,
          encounterQuestion: null,
        })
      },
    }),
    {
      name: 'pokemon-academy-explore',
      partialize: (state) => ({
        currentRegion: state.currentRegion,
        playerX: state.playerX,
        playerY: state.playerY,
        facing: state.facing,
        grassStepCount: state.grassStepCount,
      }),
    }
  )
)
