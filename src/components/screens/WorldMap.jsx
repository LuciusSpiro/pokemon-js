import { Link } from 'react-router-dom'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { useChallengeStore } from '../../stores/useChallengeStore'
import { GYMS, TYPE_COLORS } from '../../utils/constants'
import Badge from '../ui/Badge'

export default function WorldMap() {
  const currentGym = usePlayerStore((s) => s.currentGym)
  const badges = usePlayerStore((s) => s.badges)
  const name = usePlayerStore((s) => s.name)
  const getGymProgress = useChallengeStore((s) => s.getGymProgress)

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-1">Willkommen zurueck, {name}!</h1>
        <p className="text-gray-400 text-sm sm:text-base">Waehle eine Arena fuer deine naechste Challenge.</p>
      </div>

      {/* Explore CTA */}
      <Link
        to="/explore"
        className="block mb-6 sm:mb-8 p-4 bg-gradient-to-r from-green-900/50 to-green-800/30 border-2 border-green-700/50 rounded-lg hover:border-green-500 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🌿</span>
          <div>
            <h3 className="font-bold text-green-400">Welt erkunden</h3>
            <p className="text-sm text-gray-400">Laufe durch die Welt, fange wilde Pokemon im hohen Gras!</p>
          </div>
          <span className="ml-auto text-green-500 text-lg">→</span>
        </div>
      </Link>

      {/* Badge Collection */}
      <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
        {GYMS.map((gym) => (
          <Badge
            key={gym.id}
            name={gym.badge}
            type={gym.type}
            earned={badges.includes(gym.badge)}
          />
        ))}
      </div>

      {/* Gym Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {GYMS.map((gym) => {
          const unlocked = gym.id <= currentGym
          const hasBadge = badges.includes(gym.badge)
          const progress = getGymProgress(gym.id)

          return (
            <div key={gym.id} className="relative">
              {unlocked ? (
                <Link
                  to={`/gym/${gym.id}`}
                  className={`block pokemon-card h-full transition-all hover:scale-102 ${
                    hasBadge ? 'border-pokemon-yellow/50' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: TYPE_COLORS[gym.type] }}
                    >
                      {gym.id}
                    </span>
                    <h3 className="font-bold text-white">{gym.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{gym.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Leiter: {gym.leader}</span>
                    {hasBadge ? (
                      <span className="text-pokemon-yellow font-bold">★ {gym.badge}</span>
                    ) : progress > 0 ? (
                      <span className="text-gray-500">{progress} geloest</span>
                    ) : (
                      <span className="text-green-400">NEU</span>
                    )}
                  </div>
                </Link>
              ) : (
                <div className="pokemon-card h-full opacity-50 cursor-not-allowed">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gray-700 text-gray-500">
                      🔒
                    </span>
                    <h3 className="font-bold text-gray-500">{gym.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Besiege zuerst Arena {gym.id - 1}, um diese Arena freizuschalten.
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
