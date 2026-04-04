import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useExploreStore } from '../../stores/useExploreStore'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { usePokedexStore } from '../../stores/usePokedexStore'
import { getRegion } from '../../data/regions/index'
import { getChallengeForPokemon } from '../../data/pokemonChallenges'
import TileGrid from '../explore/TileGrid'
import DPad from '../explore/DPad'
import RegionHUD from '../explore/RegionHUD'
import EncounterOverlay from '../explore/EncounterOverlay'
import GateTransition from '../explore/GateTransition'
import DarknessOverlay from '../explore/DarknessOverlay'
import Notification from '../ui/Notification'
import { useMovement } from '../../hooks/useMovement'

function pickWeightedPokemon(pokemonList) {
  const totalWeight = pokemonList.reduce((sum, p) => sum + p.weight, 0)
  let roll = Math.random() * totalWeight
  for (const pokemon of pokemonList) {
    roll -= pokemon.weight
    if (roll <= 0) return pokemon
  }
  return pokemonList[pokemonList.length - 1]
}

export default function ExploreMap() {
  const navigate = useNavigate()
  const { currentRegion, playerX, playerY, facing, isMoving, encounterPhase } =
    useExploreStore()
  const move = useExploreStore((s) => s.move)
  const handleGate = useExploreStore((s) => s.handleGate)
  const enterArena = useExploreStore((s) => s.enterArena)
  const startEncounter = useExploreStore((s) => s.startEncounter)
  const setEncounterPhase = useExploreStore((s) => s.setEncounterPhase)
  const _getCurrentTiles = useExploreStore((s) => s._getCurrentTiles)

  const badges = usePlayerStore((s) => s.badges)
  const isMightyBob = usePlayerStore((s) => s.isMightyBob)
  const playerFlags = { ...(usePlayerStore((s) => s.flags) || {}), mightyBob: isMightyBob() }
  const isCaught = usePokedexStore((s) => s.isCaught)

  const [gateTransition, setGateTransition] = useState(null)
  const [notification, setNotification] = useState(null)
  const [blockedMessage, setBlockedMessage] = useState(null)

  const region = getRegion(currentRegion)
  const inEncounter = encounterPhase !== 'none'

  // Get the correct tile grid (supports maze steps)
  const currentTiles = region ? _getCurrentTiles(region) : null

  const handleMove = useCallback(
    (direction) => {
      if (inEncounter || gateTransition) return

      const result = move(direction, badges, playerFlags)
      if (!result) return

      // Blocked by barrier
      if (result.type === 'blocked') {
        setBlockedMessage(result.message)
        setTimeout(() => setBlockedMessage(null), 2000)
        return
      }

      // Wild encounter
      if (result.type === 'encounter') {
        const available = region.pokemon?.filter((p) => !isCaught(p.id)) || []
        if (available.length === 0) {
          setNotification({ message: 'Alle Pokemon hier gefangen!', type: 'info' })
          return
        }

        const pokemon = pickWeightedPokemon(available)
        const question = getChallengeForPokemon(pokemon.id)
        if (question.type === 'code') {
          pokemon.encounterType = 'code'
        } else {
          pokemon.encounterType = 'quiz'
        }

        startEncounter(pokemon, question)
        setTimeout(() => setEncounterPhase('intro'), 400)
        return
      }

      // Gate transition
      if (result.type === 'gate') {
        const gateResult = handleGate(result.gate, badges, playerFlags)

        if (gateResult.mazeReset) {
          // Lost Woods wrong path
          setNotification({ message: gateResult.message, type: 'warning' })
          return
        }

        if (gateResult.stayInRegion) {
          // Lost Woods correct step but stay in region (tiles change)
          setNotification({ message: 'Der Wald veraendert sich...', type: 'info' })
          return
        }

        if (!gateResult.success) {
          setBlockedMessage(gateResult.message || 'Dieser Weg ist versperrt!')
          setTimeout(() => setBlockedMessage(null), 2000)
          return
        }

        if (gateResult.mazeComplete) {
          setNotification({ message: 'Du hast den Irrlichtwald durchquert!', type: 'success' })
        }

        // Normal transition
        setGateTransition(gateResult.targetRegion)
        setTimeout(() => setGateTransition(null), 2000)
        return
      }

      // Arena entry (gym door)
      if (result.type === 'arena') {
        setGateTransition(result.arenaId)
        setTimeout(() => {
          enterArena(result.arenaId)
          setTimeout(() => setGateTransition(null), 600)
        }, 500)
        return
      }

      // Gym leader tile → battle
      if (result.type === 'gymLeader') {
        navigate(`/gym/${result.gymId}`)
        return
      }

      // Legacy gym door (fallback)
      if (result.type === 'gym') {
        navigate(`/gym/${result.gymId}`)
        return
      }
    },
    [inEncounter, gateTransition, move, region, currentRegion, badges, playerFlags, isCaught, startEncounter, setEncounterPhase, handleGate, enterArena, navigate]
  )

  useMovement(handleMove, !inEncounter && !gateTransition)

  if (!region || !currentTiles) {
    return <div className="text-center text-gray-400 py-12">Region nicht gefunden</div>
  }

  return (
    <div className="h-full flex flex-col">
      {notification && (
        <Notification
          key={notification.message}
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {blockedMessage && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 dialogue-box max-w-xs text-center">
          {blockedMessage}
        </div>
      )}

      {/* Map Container */}
      <div className="flex-1 relative overflow-hidden rounded-lg border-2 border-gray-700 bg-gray-900">
        <div
          className="absolute inset-0"
          style={{ aspectRatio: '20 / 15', maxHeight: '100%', maxWidth: '100%', margin: 'auto' }}
        >
          <TileGrid
            tiles={currentTiles}
            playerX={playerX}
            playerY={playerY}
            facing={facing}
            isMoving={isMoving}
          />
          <RegionHUD regionId={currentRegion} />

          {/* Dark cave overlay */}
          {region.dark && (
            <DarknessOverlay
              playerX={playerX}
              playerY={playerY}
              hasBadge={badges.includes(region.flashBadge || '')}
              defaultRadius={region.darkRadius?.default || 2}
              flashRadius={region.darkRadius?.withFlash || 5}
            />
          )}
        </div>
      </div>

      {/* Controls hint */}
      <div className="hidden md:flex justify-center gap-4 mt-2 text-xs text-gray-600">
        <span>Pfeiltasten / WASD zum Bewegen</span>
        {region.regionType === 'arena' && <span>Finde den Arena-Leiter!</span>}
      </div>

      <DPad onMove={handleMove} />
      <EncounterOverlay />

      {gateTransition && (
        <GateTransition
          targetRegionId={gateTransition}
          onComplete={() => {}}
        />
      )}
    </div>
  )
}
