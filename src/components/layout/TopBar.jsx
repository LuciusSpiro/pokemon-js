import { Link } from 'react-router-dom'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { usePokedexStore } from '../../stores/usePokedexStore'
import XPBar from '../ui/XPBar'

export default function TopBar({ onMenuToggle }) {
  const { name, level } = usePlayerStore()
  const caughtCount = usePokedexStore((s) => s.getCaughtCount())

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-3 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-2">
        {/* Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors -ml-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to="/map" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl sm:text-2xl">⚡</span>
            <span className="font-pixel text-pokemon-yellow text-xs sm:text-sm hidden sm:block">
              Pokemon JS Academy
            </span>
          </Link>
        </div>

        {/* XP Bar - hidden on very small screens */}
        <XPBar className="flex-1 max-w-xs mx-2 sm:mx-6 hidden xs:block" />

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4 text-sm shrink-0">
          <Link to="/pokedex" className="text-gray-400 hover:text-white transition-colors hidden sm:block">
            {caughtCount} gefangen
          </Link>
          <Link
            to="/trainer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-pokemon-red rounded-full flex items-center justify-center text-white font-bold text-xs">
              {level}
            </span>
            <span className="hidden sm:block">{name || 'Trainer'}</span>
          </Link>
        </div>
      </div>

      {/* XP Bar - mobile (below header content) */}
      <div className="mt-2 xs:hidden">
        <XPBar />
      </div>
    </header>
  )
}
