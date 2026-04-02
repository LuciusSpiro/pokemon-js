import { useState, useEffect } from 'react'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { usePokedexStore } from '../../stores/usePokedexStore'
import { useChallengeStore } from '../../stores/useChallengeStore'
import { fetchPokemon } from '../../api/pokeClient'
import { GYMS } from '../../utils/constants'
import { xpForLevel } from '../../utils/xpCalculator'
import Badge from '../ui/Badge'
import XPBar from '../ui/XPBar'

export default function TrainerCard() {
  const { name, level, xp, badges, starterId } = usePlayerStore()
  const caughtCount = usePokedexStore((s) => s.getCaughtCount())
  const completed = useChallengeStore((s) => s.completed)
  const [starterData, setStarterData] = useState(null)

  const completedCount = Object.values(completed).filter((c) => c.completedAt).length

  useEffect(() => {
    if (starterId) {
      fetchPokemon(starterId).then(setStarterData).catch(() => {})
    }
  }, [starterId])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="pokemon-card">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-pixel text-pokemon-yellow text-lg">Trainerpass</h1>
          <span className="text-gray-500 text-sm">Pokemon JS Academy</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
          {/* Trainer Avatar + Starter */}
          <div className="text-center shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-full flex items-center justify-center text-3xl sm:text-4xl mb-2">
              🧑‍💻
            </div>
            {starterData && (
              <div className="text-xs text-gray-400">
                <img
                  src={starterData.sprite}
                  alt={starterData.name}
                  className="w-12 h-12 mx-auto"
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="capitalize">{starterData.name}</span>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{name}</h2>
            <XPBar className="mb-4" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Level</span>
                <div className="text-xl font-bold text-pokemon-yellow">{level}</div>
              </div>
              <div>
                <span className="text-gray-500">Gesamt-XP</span>
                <div className="text-xl font-bold">{xp}</div>
              </div>
              <div>
                <span className="text-gray-500">Pokemon</span>
                <div className="text-xl font-bold">{caughtCount}</div>
              </div>
              <div>
                <span className="text-gray-500">Challenges</span>
                <div className="text-xl font-bold">{completedCount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-sm text-gray-500 mb-3">Orden-Sammlung</h3>
          <div className="grid grid-cols-4 sm:flex gap-3 sm:gap-4 flex-wrap">
            {GYMS.map((gym) => (
              <div key={gym.id} className="text-center">
                <Badge
                  name={gym.badge}
                  type={gym.type}
                  earned={badges.includes(gym.badge)}
                  size="md"
                />
                <div className="text-xs text-gray-500 mt-1 truncate">{gym.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
