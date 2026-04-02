import { useCallback } from 'react'
import { useExploreStore } from '../../stores/useExploreStore'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { usePokedexStore } from '../../stores/usePokedexStore'
import WildPokemonIntro from './WildPokemonIntro'
import QuizEncounter from './QuizEncounter'
import CodeEncounter from './CodeEncounter'
import CatchAnimation from './CatchAnimation'

const XP_REWARDS = {
  common: 25,
  uncommon: 50,
  rare: 100,
  legendary: 200,
}

export default function EncounterOverlay() {
  const phase = useExploreStore((s) => s.encounterPhase)
  const pokemon = useExploreStore((s) => s.encounterPokemon)
  const question = useExploreStore((s) => s.encounterQuestion)
  const setPhase = useExploreStore((s) => s.setEncounterPhase)
  const resolveEncounter = useExploreStore((s) => s.resolveEncounter)
  const clearEncounter = useExploreStore((s) => s.clearEncounter)

  const gainXP = usePlayerStore((s) => s.gainXP)
  const catchPokemon = usePokedexStore((s) => s.catchPokemon)
  const seePokemon = usePokedexStore((s) => s.seePokemon)

  const handleIntroReady = useCallback(() => {
    // Mark as seen when encounter starts
    if (pokemon) seePokemon(pokemon.id)
    setPhase('challenge')
  }, [setPhase, pokemon, seePokemon])

  const handleChallengeResult = useCallback(
    (correct) => {
      if (correct && pokemon) {
        catchPokemon(pokemon.id, useExploreStore.getState().currentRegion)
        gainXP(XP_REWARDS[pokemon.rarity] || 25)
      }
      resolveEncounter(correct)
    },
    [pokemon, catchPokemon, gainXP, resolveEncounter]
  )

  const handleCatchComplete = useCallback(() => {
    clearEncounter()
  }, [clearEncounter])

  if (phase === 'none') return null

  return (
    <div className="fixed inset-0 z-40 bg-gray-900 flex flex-col">
      {/* Screen flash transition */}
      {phase === 'transition' && (
        <div className="absolute inset-0 bg-white animate-flash z-50" />
      )}

      {/* Intro */}
      {phase === 'intro' && pokemon && (
        <WildPokemonIntro pokemon={pokemon} onReady={handleIntroReady} />
      )}

      {/* Challenge */}
      {phase === 'challenge' && pokemon && question && (
        pokemon.encounterType === 'code' ? (
          <CodeEncounter
            pokemon={pokemon}
            challenge={question}
            onResult={handleChallengeResult}
          />
        ) : (
          <QuizEncounter
            pokemon={pokemon}
            question={question}
            onResult={handleChallengeResult}
          />
        )
      )}

      {/* Catch Animation */}
      {(phase === 'caught' || phase === 'fled') && pokemon && (
        <CatchAnimation
          caught={phase === 'caught'}
          pokemonName={pokemon.name}
          onComplete={handleCatchComplete}
        />
      )}
    </div>
  )
}
