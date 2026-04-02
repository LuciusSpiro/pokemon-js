import { useParams, Link, Navigate } from 'react-router-dom'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { useChallengeStore } from '../../stores/useChallengeStore'
import { GYMS, TYPE_COLORS } from '../../utils/constants'
import { gym1Challenges } from '../../data/challenges/gym1-variables'
import TypeBadge from '../ui/TypeBadge'

const challengesByGym = {
  1: gym1Challenges,
}

export default function GymScreen() {
  const { gymId } = useParams()
  const gymIdNum = parseInt(gymId, 10)
  const gym = GYMS.find((g) => g.id === gymIdNum)
  const currentGym = usePlayerStore((s) => s.currentGym)
  const isCompleted = useChallengeStore((s) => s.isCompleted)

  if (!gym || gymIdNum > currentGym) {
    return <Navigate to="/map" replace />
  }

  const challenges = challengesByGym[gymIdNum] || []
  const completedCount = challenges.filter((c) => isCompleted(c.id)).length

  return (
    <div>
      {/* Gym Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
            style={{ backgroundColor: TYPE_COLORS[gym.type] }}
          >
            {gym.id}
          </span>
          <div>
            <h1 className="text-2xl font-bold">{gym.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Arena-Leiter: {gym.leader}</span>
              <TypeBadge type={gym.type} />
            </div>
          </div>
        </div>
        <p className="text-gray-400 mt-2">{gym.description}</p>
        <div className="mt-3 text-sm text-gray-500">
          Fortschritt: {completedCount} / {challenges.length} Challenges geloest
        </div>
      </div>

      {/* Challenge List */}
      <div className="space-y-3">
        {challenges.map((challenge) => {
          const completed = isCompleted(challenge.id)
          const difficultyColors = {
            easy: 'text-green-400',
            medium: 'text-pokemon-yellow',
            hard: 'text-pokemon-red',
          }

          return (
            <Link
              key={challenge.id}
              to={`/gym/${gymId}/challenge/${challenge.id}`}
              className={`block pokemon-card transition-all hover:scale-[1.01] ${
                completed ? 'border-green-600/50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      completed
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {completed ? '✓' : challenge.order}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{challenge.title}</h3>
                    <div className="flex items-center gap-3 text-xs mt-1">
                      <span className={difficultyColors[challenge.difficulty]}>
                        {challenge.difficulty === 'easy' ? 'Einfach' : challenge.difficulty === 'medium' ? 'Mittel' : 'Schwer'}
                      </span>
                      <span className="text-gray-500">{challenge.xpReward} XP</span>
                      {challenge.pokemonReward && (
                        <span className="text-pokemon-yellow">+ Pokemon!</span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-gray-600 text-lg">→</span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Gym Quiz Battle (coming in Phase 2) */}
      {challenges.length > 0 && completedCount === challenges.length && (
        <div className="mt-6 p-4 border-2 border-dashed border-pokemon-yellow/30 rounded-lg text-center">
          <p className="text-pokemon-yellow font-bold mb-2">
            Alle Challenges geloest!
          </p>
          <p className="text-gray-400 text-sm">
            Der Arena-Kampf gegen {gym.leader} wird bald freigeschaltet...
          </p>
        </div>
      )}
    </div>
  )
}
