import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlayerStore } from '../../stores/usePlayerStore'

export default function StartScreen() {
  const navigate = useNavigate()
  const { starterId, name } = usePlayerStore()
  const setName = usePlayerStore((s) => s.setName)
  const [inputName, setInputName] = useState(name || '')

  // If player already has a starter, go to map
  useEffect(() => {
    if (starterId) {
      navigate('/map', { replace: true })
    }
  }, [starterId, navigate])

  function handleStart(e) {
    e.preventDefault()
    if (!inputName.trim()) return
    setName(inputName.trim())
    navigate('/starter')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center max-w-lg mx-auto px-6">
        <div className="text-6xl mb-6">⚡</div>
        <h1 className="font-pixel text-pokemon-yellow text-2xl mb-2">
          Pokemon
        </h1>
        <h2 className="font-pixel text-white text-lg mb-8">
          JS Academy
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Lerne JavaScript und React auf deiner Reise zum Pokemon-Meister!
          Loese Challenges, fange Pokemon und besiege 8 Arena-Leiter.
        </p>

        <form onSubmit={handleStart} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Wie heisst du, Trainer?
            </label>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Dein Trainername..."
              className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white text-center text-lg focus:outline-none focus:border-pokemon-yellow transition-colors"
              maxLength={20}
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={!inputName.trim()}
            className="btn-primary w-full text-lg"
          >
            Abenteuer starten!
          </button>
        </form>

        <p className="text-gray-600 text-xs mt-8">
          Dein Fortschritt wird automatisch im Browser gespeichert.
        </p>
      </div>
    </div>
  )
}
