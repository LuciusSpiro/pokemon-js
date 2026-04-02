import { NavLink } from 'react-router-dom'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { useChallengeStore } from '../../stores/useChallengeStore'
import { GYMS, TYPE_COLORS } from '../../utils/constants'

export default function Sidebar({ onNavigate }) {
  const currentGym = usePlayerStore((s) => s.currentGym)
  const badges = usePlayerStore((s) => s.badges)
  const getGymProgress = useChallengeStore((s) => s.getGymProgress)

  const handleClick = () => onNavigate?.()

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col h-full overflow-y-auto">
      <nav className="flex-1 p-4">
        <h2 className="text-xs uppercase text-gray-500 font-bold mb-3 tracking-wider">
          Arenen
        </h2>
        <ul className="space-y-1">
          {GYMS.map((gym) => {
            const unlocked = gym.id <= currentGym
            const hasBadge = badges.includes(gym.badge)
            const progress = getGymProgress(gym.id)

            return (
              <li key={gym.id}>
                {unlocked ? (
                  <NavLink
                    to={`/gym/${gym.id}`}
                    onClick={handleClick}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-750'
                      }`
                    }
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: TYPE_COLORS[gym.type] }}
                    >
                      {gym.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{gym.name}</div>
                      <div className="text-xs text-gray-500">{gym.leader}</div>
                    </div>
                    {hasBadge && <span className="text-pokemon-yellow">★</span>}
                    {!hasBadge && progress > 0 && (
                      <span className="text-xs text-gray-500">{progress}</span>
                    )}
                  </NavLink>
                ) : (
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 cursor-not-allowed">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gray-700 shrink-0">
                      🔒
                    </span>
                    <span className="text-sm">{gym.name}</span>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <NavLink
          to="/explore"
          onClick={handleClick}
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
              isActive ? 'bg-green-800 text-green-300' : 'text-green-400 hover:text-green-300 hover:bg-gray-750'
            }`
          }
        >
          🌿 Erkunden
        </NavLink>
        <NavLink
          to="/pokedex"
          onClick={handleClick}
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          Pokedex
        </NavLink>
        <NavLink
          to="/trainer"
          onClick={handleClick}
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          Trainerpass
        </NavLink>
      </div>
    </aside>
  )
}
