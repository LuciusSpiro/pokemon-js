import { useState, useEffect } from 'react'
import { useBattleStore } from '../../stores/useBattleStore'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { getMultiplier, getEffectivenessLabel } from '../../utils/typeEffectiveness'
import TypeBadge from '../ui/TypeBadge'

export default function BattleQuiz({ question, playerTeam, leaderPokemonTypes, onResult }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [step, setStep] = useState('answer') // answer | pokemon | done
  const selectAttackPokemon = useBattleStore((s) => s.selectAttackPokemon)
  const isMightyBob = usePlayerStore((s) => s.isMightyBob)

  // 🐐 Auto-win
  useEffect(() => {
    if (isMightyBob()) {
      selectAttackPokemon(null)
      setTimeout(() => onResult(true), 500)
    }
  }, [])

  function handleAnswer(index) {
    if (step !== 'answer') return
    setSelectedAnswer(index)

    const correct = index === question.correct
    if (!correct) {
      // Wrong answer - skip pokemon selection
      setStep('done')
      selectAttackPokemon(null)
      setTimeout(() => onResult(false), 1200)
    } else {
      // Correct - choose attack pokemon
      const availablePokemon = playerTeam.filter((p) => !p.used)
      if (availablePokemon.length === 0) {
        // No pokemon left, auto-attack without
        setStep('done')
        selectAttackPokemon(null)
        setTimeout(() => onResult(true), 800)
      } else {
        setStep('pokemon')
      }
    }
  }

  function handlePokemonSelect(pokemon) {
    setSelectedPokemon(pokemon)
    selectAttackPokemon(pokemon)
    setStep('done')
    setTimeout(() => onResult(true), 800)
  }

  function handleNoPokemon() {
    selectAttackPokemon(null)
    setStep('done')
    setTimeout(() => onResult(true), 800)
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Question */}
      <div className="text-center">
        <p className="text-white text-sm sm:text-base font-bold">{question.question}</p>
      </div>

      {/* Step 1: Answer selection */}
      {step === 'answer' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {question.answers.map((answer, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full px-3 py-2.5 rounded-lg text-left text-sm font-medium text-white border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 active:scale-95 transition-all"
            >
              <span className="text-gray-400 mr-2">{String.fromCharCode(65 + i)}.</span>
              {answer}
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Pokemon attack selection */}
      {step === 'pokemon' && (
        <div>
          <p className="text-green-400 text-sm font-bold text-center mb-3">
            Richtig! Waehle ein Pokemon als Attacke:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {playerTeam.filter((p) => !p.used).map((pokemon) => {
              const mult = getMultiplier(pokemon.types, leaderPokemonTypes)
              const effLabel = getEffectivenessLabel(mult)
              const borderColor = mult > 1 ? 'border-green-500' : mult < 1 ? 'border-red-500' : 'border-gray-600'

              return (
                <button
                  key={pokemon.id}
                  onClick={() => handlePokemonSelect(pokemon)}
                  className={`p-2 rounded-lg bg-gray-700 border-2 ${borderColor} hover:bg-gray-600 transition-all text-center`}
                >
                  <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    className="w-10 h-10 mx-auto"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <p className="text-xs font-bold capitalize truncate">{pokemon.name}</p>
                  <div className="flex justify-center gap-0.5 mt-0.5">
                    {pokemon.types.map((t) => <TypeBadge key={t} type={t} />)}
                  </div>
                  {effLabel && (
                    <p className={`text-[10px] mt-1 font-bold ${
                      mult > 1 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {mult > 1 ? '2x!' : '0.5x'}
                    </p>
                  )}
                </button>
              )
            })}
            <button
              onClick={handleNoPokemon}
              className="p-2 rounded-lg bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 transition-all text-center"
            >
              <div className="w-10 h-10 mx-auto flex items-center justify-center text-2xl">👊</div>
              <p className="text-xs text-gray-400">Ohne</p>
              <p className="text-[10px] text-gray-500">15 DMG</p>
            </button>
          </div>
        </div>
      )}

      {/* Result feedback */}
      {step === 'done' && (
        <div className={`text-center font-bold text-lg animate-bounce-in ${
          selectedAnswer === question.correct ? 'text-green-400' : 'text-red-400'
        }`}>
          {selectedAnswer === question.correct ? 'Treffer!' : 'Daneben!'}
        </div>
      )}
    </div>
  )
}
