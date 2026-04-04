import { useState, useEffect } from 'react'
import { usePlayerStore } from '../../stores/usePlayerStore'

export default function QuizEncounter({ pokemon, question, onResult }) {
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const isMightyBob = usePlayerStore((s) => s.isMightyBob)

  // 🐐 Auto-win
  useEffect(() => {
    if (isMightyBob()) {
      setTimeout(() => onResult(true), 500)
    }
  }, [])

  function handleAnswer(index) {
    if (answered) return
    setSelected(index)
    setAnswered(true)

    const correct = index === question.correct
    setTimeout(() => onResult(correct), 1200)
  }

  return (
    <div className="flex flex-col h-full p-4">
      {/* Pokemon + Question */}
      <div className="text-center mb-6">
        <p className="text-gray-400 text-sm mb-2">
          Um {pokemon.name} zu fangen, beantworte die Frage:
        </p>
        <p className="text-white text-base sm:text-lg font-bold">
          {question.question}
        </p>
      </div>

      {/* Answers */}
      <div className="flex-1 flex flex-col gap-3 max-w-lg mx-auto w-full">
        {question.answers.map((answer, i) => {
          let btnColor = 'bg-gray-700 hover:bg-gray-600 border-gray-600'
          if (answered) {
            if (i === question.correct) {
              btnColor = 'bg-green-700 border-green-500'
            } else if (i === selected) {
              btnColor = 'bg-red-700 border-red-500'
            } else {
              btnColor = 'bg-gray-800 border-gray-700 opacity-50'
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className={`w-full px-4 py-3 rounded-lg text-left text-sm sm:text-base font-medium text-white border-2 transition-all ${btnColor} ${
                !answered ? 'active:scale-95' : ''
              }`}
            >
              <span className="text-gray-400 mr-2">{String.fromCharCode(65 + i)}.</span>
              {answer}
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div className={`text-center mt-4 font-bold text-lg animate-bounce-in ${
          selected === question.correct ? 'text-green-400' : 'text-red-400'
        }`}>
          {selected === question.correct ? 'Richtig!' : 'Falsch!'}
        </div>
      )}
    </div>
  )
}
