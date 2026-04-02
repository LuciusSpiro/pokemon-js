import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useExploreStore } from '../../stores/useExploreStore'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { usePokedexStore } from '../../stores/usePokedexStore'
import { getRegion, getUnlockedRegions } from '../../data/regions/index'
import { EASY_QUESTIONS, MEDIUM_QUESTIONS, HARD_QUESTIONS, EXPERT_QUESTIONS } from '../../data/encounterQuestions'
import { CODE_CHALLENGES } from '../../data/encounterChallenges'
import TileGrid from '../explore/TileGrid'
import DPad from '../explore/DPad'
import RegionHUD from '../explore/RegionHUD'
import EncounterOverlay from '../explore/EncounterOverlay'
import GateTransition from '../explore/GateTransition'
import Notification from '../ui/Notification'
import { useMovement } from '../../hooks/useMovement'

// Question pool by region difficulty
function getQuestionPool(regionId) {
  if (regionId <= 2) return EASY_QUESTIONS
  if (regionId <= 4) return MEDIUM_QUESTIONS
  if (regionId <= 6) return HARD_QUESTIONS
  return EXPERT_QUESTIONS
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

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
  const startEncounter = useExploreStore((s) => s.startEncounter)
  const setEncounterPhase = useExploreStore((s) => s.setEncounterPhase)
  const enterGate = useExploreStore((s) => s.enterGate)
  const badges = usePlayerStore((s) => s.badges)
  const isCaught = usePokedexStore((s) => s.isCaught)

  const [gateTransition, setGateTransition] = useState(null)
  const [notification, setNotification] = useState(null)
  const [blockedMessage, setBlockedMessage] = useState(null)

  const region = getRegion(currentRegion)
  const unlockedRegions = getUnlockedRegions(badges)
  const inEncounter = encounterPhase !== 'none'

  const handleMove = useCallback(
    (direction) => {
      if (inEncounter || gateTransition) return

      const result = move(direction)
      if (!result) return

      if (result.type === 'encounter') {
        // Pick a wild Pokemon
        const available = region.pokemon.filter((p) => !isCaught(p.id))
        if (available.length === 0) {
          setNotification({ message: 'Alle Pokemon hier gefangen!', type: 'info' })
          return
        }

        const pokemon = pickWeightedPokemon(available)
        const question =
          pokemon.encounterType === 'code'
            ? pickRandom(CODE_CHALLENGES)
            : pickRandom(getQuestionPool(currentRegion))

        startEncounter(pokemon, question)
        // Auto-advance from transition to intro
        setTimeout(() => setEncounterPhase('intro'), 400)
      }

      if (result.type === 'gate') {
        const gateDir = result.gate
        const gateInfo = region.gates[gateDir]
        if (!gateInfo) return

        if (!unlockedRegions.includes(gateInfo.targetRegion)) {
          setBlockedMessage('Dieser Weg ist versperrt! Besiege zuerst die Arena.')
          setTimeout(() => setBlockedMessage(null), 2000)
          return
        }

        setGateTransition(gateInfo.targetRegion)
        setTimeout(() => {
          enterGate(gateDir)
          setTimeout(() => setGateTransition(null), 600)
        }, 500)
      }

      if (result.type === 'gym') {
        navigate(`/gym/${result.gymId}`)
      }
    },
    [
      inEncounter,
      gateTransition,
      move,
      region,
      currentRegion,
      isCaught,
      startEncounter,
      setEncounterPhase,
      enterGate,
      unlockedRegions,
      navigate,
    ]
  )

  // Keyboard movement
  useMovement(handleMove, !inEncounter && !gateTransition)

  if (!region) return <div className="text-center text-gray-400 py-12">Region nicht gefunden</div>

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
            tiles={region.tiles}
            playerX={playerX}
            playerY={playerY}
            facing={facing}
            isMoving={isMoving}
          />
          <RegionHUD regionId={currentRegion} />
        </div>
      </div>

      {/* Controls hint (desktop) */}
      <div className="hidden md:flex justify-center gap-4 mt-2 text-xs text-gray-600">
        <span>Pfeiltasten / WASD zum Bewegen</span>
        <span>Hohes Gras = wilde Pokemon</span>
      </div>

      {/* Mobile D-Pad */}
      <DPad onMove={handleMove} />

      {/* Encounter Overlay */}
      <EncounterOverlay />

      {/* Gate Transition */}
      {gateTransition && (
        <GateTransition
          targetRegionId={gateTransition}
          onComplete={() => {}}
        />
      )}
    </div>
  )
}
