import { useState, useEffect } from 'react'

export default function CatchAnimation({ caught, pokemonName, onComplete }) {
  const [phase, setPhase] = useState('throw') // throw | wobble | result

  useEffect(() => {
    const timers = []
    if (caught) {
      timers.push(setTimeout(() => setPhase('wobble'), 500))
      timers.push(setTimeout(() => setPhase('result'), 2000))
      timers.push(setTimeout(onComplete, 3500))
    } else {
      timers.push(setTimeout(() => setPhase('result'), 800))
      timers.push(setTimeout(onComplete, 2500))
    }
    return () => timers.forEach(clearTimeout)
  }, [caught, onComplete])

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {phase === 'throw' && (
        <div className="text-6xl animate-bounce">
          {caught ? '🔴' : '💨'}
        </div>
      )}

      {phase === 'wobble' && caught && (
        <div className="text-6xl animate-pokeball-wobble">
          🔴
        </div>
      )}

      {phase === 'result' && (
        <div className="text-center animate-bounce-in">
          {caught ? (
            <>
              <div className="text-6xl mb-4">✨</div>
              <p className="text-pokemon-yellow text-xl font-bold mb-2">
                Gotcha!
              </p>
              <p className="text-white text-lg">
                {pokemonName} wurde gefangen!
              </p>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">💨</div>
              <p className="text-red-400 text-xl font-bold mb-2">
                Entwischt!
              </p>
              <p className="text-gray-400 text-lg">
                {pokemonName} ist geflohen...
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
