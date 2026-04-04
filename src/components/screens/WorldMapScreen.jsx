import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useExploreStore } from '../../stores/useExploreStore'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { getAllRegions, getRegion } from '../../data/regions/index'
import { TYPE_COLORS } from '../../utils/constants'

// Fixed positions for each region on the map grid (col, row in a 10x12 grid)
// Marmoria (Start) at top, Vertania (End) at bottom
const MAP_POSITIONS = {
  // Cities (left spine) - top to bottom
  city_marmoria:      { col: 2, row: 1 },
  city_azuria:        { col: 2, row: 3 },
  city_prismania:     { col: 2, row: 6 },
  city_saffronia:     { col: 2, row: 8 },
  // Cities (right spine)
  city_orania:        { col: 7, row: 5 },
  city_fuchsania:     { col: 7, row: 8 },
  city_zinnoberinsel: { col: 7, row: 10 },
  // Final
  city_vertania:      { col: 5, row: 11 },
  // Routes (left spine)
  route_1:            { col: 2, row: 2 },
  route_5:            { col: 2, row: 4.5 },
  route_9:            { col: 2, row: 7 },
  route_12:           { col: 2, row: 9 },
  // Routes (right spine)
  route_2:            { col: 4, row: 1 },
  route_3:            { col: 5, row: 3 },
  route_7:            { col: 7, row: 6 },
  route_8:            { col: 7, row: 7 },
  route_11:           { col: 7, row: 9 },
  // Cross routes
  route_6:            { col: 4.5, row: 5.5 },
  route_10:           { col: 4.5, row: 8 },
  route_13:           { col: 5, row: 10 },
  route_14:           { col: 4, row: 10 },
  // Dungeons
  dungeon_lost_woods: { col: 7, row: 6.5 },
  dungeon_dark_cave:  { col: 3, row: 9.5 },
}

// Connections to draw
const CONNECTIONS = [
  ['city_marmoria', 'route_1'],
  ['route_1', 'city_azuria'],
  ['city_marmoria', 'route_2'],
  ['route_2', 'route_3'],
  ['route_3', 'city_orania'],
  ['city_azuria', 'route_5'],
  ['route_5', 'city_prismania'],
  ['city_prismania', 'route_6'],
  ['route_6', 'city_orania'],
  ['city_orania', 'route_7'],
  ['route_7', 'dungeon_lost_woods'],
  ['dungeon_lost_woods', 'route_8'],
  ['route_8', 'city_fuchsania'],
  ['city_prismania', 'route_9'],
  ['route_9', 'city_saffronia'],
  ['city_saffronia', 'route_10'],
  ['route_10', 'city_fuchsania'],
  ['city_fuchsania', 'route_11'],
  ['route_11', 'city_zinnoberinsel'],
  ['city_saffronia', 'route_12'],
  ['route_12', 'dungeon_dark_cave'],
  ['dungeon_dark_cave', 'route_14'],
  ['city_zinnoberinsel', 'route_13'],
  ['route_13', 'route_14'],
  ['route_14', 'city_vertania'],
]

function getNodeStyle(region) {
  if (region.regionType === 'city') {
    return {
      size: 'w-10 h-10 sm:w-12 sm:h-12',
      bg: TYPE_COLORS[region.type] || '#888',
      border: '3px solid #FFD700',
      text: 'text-[8px] sm:text-[10px] font-bold',
      icon: '🏛',
    }
  }
  if (region.regionType === 'dungeon') {
    return {
      size: 'w-8 h-8 sm:w-10 sm:h-10',
      bg: region.dark ? '#1a1a2e' : '#2D6A1E',
      border: '2px solid #666',
      text: 'text-[7px] sm:text-[9px]',
      icon: region.dark ? '🕳' : '🌲',
    }
  }
  // Route
  return {
    size: 'w-5 h-5 sm:w-6 sm:h-6',
    bg: '#666',
    border: '2px solid #444',
    text: 'text-[6px] sm:text-[8px]',
    icon: '',
  }
}

export default function WorldMapScreen() {
  const navigate = useNavigate()
  const currentRegion = useExploreStore((s) => s.currentRegion)
  const name = usePlayerStore((s) => s.name)
  const badges = usePlayerStore((s) => s.badges)
  const isMightyBob = usePlayerStore((s) => s.isMightyBob)
  const mightyBob = isMightyBob()

  // Track visited regions from explore store history
  // For now: derive from badges + current region
  const visitedRegions = useMemo(() => {
    if (mightyBob) {
      // Show everything
      return new Set(Object.keys(MAP_POSITIONS))
    }

    const visited = new Set(['city_marmoria', 'route_1', 'route_2'])
    visited.add(currentRegion)

    // Unlock based on badges
    if (badges.length >= 1) {
      ['city_azuria', 'route_3', 'route_5', 'city_orania'].forEach((r) => visited.add(r))
    }
    if (badges.length >= 2) {
      ['city_prismania', 'route_6', 'route_9'].forEach((r) => visited.add(r))
    }
    if (badges.length >= 3) {
      ['route_7', 'dungeon_lost_woods', 'route_8', 'city_fuchsania'].forEach((r) => visited.add(r))
    }
    if (badges.length >= 4) {
      ['city_saffronia', 'route_10'].forEach((r) => visited.add(r))
    }
    if (badges.length >= 5) {
      ['route_11', 'city_zinnoberinsel'].forEach((r) => visited.add(r))
    }
    if (badges.length >= 6) {
      ['route_12', 'dungeon_dark_cave', 'route_13', 'route_14'].forEach((r) => visited.add(r))
    }
    if (badges.length >= 7) {
      ['city_vertania'].forEach((r) => visited.add(r))
    }

    return visited
  }, [badges, currentRegion, mightyBob])

  const gridCols = 10
  const gridRows = 12

  function teleportTo(regionId) {
    const region = getRegion(regionId)
    if (!region) return
    useExploreStore.getState().teleportToRegion(regionId)
    navigate('/explore')
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-1">Weltkarte</h1>
        <p className="text-gray-400 text-sm">
          {badges.length}/8 Orden gesammelt
          {mightyBob && <span className="text-purple-400 ml-2">🐐 Mighty Bob Modus</span>}
        </p>
      </div>

      {/* Map */}
      <div className="relative bg-gray-800 rounded-lg border border-gray-700 overflow-hidden" style={{ aspectRatio: '10 / 12' }}>
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${gridCols} ${gridRows}`} preserveAspectRatio="none">
          {CONNECTIONS.map(([from, to], i) => {
            const posA = MAP_POSITIONS[from]
            const posB = MAP_POSITIONS[to]
            if (!posA || !posB) return null

            const visible = visitedRegions.has(from) && visitedRegions.has(to)
            if (!visible) return null

            return (
              <line
                key={i}
                x1={posA.col + 0.5}
                y1={posA.row + 0.5}
                x2={posB.col + 0.5}
                y2={posB.row + 0.5}
                stroke="#555"
                strokeWidth="0.12"
                strokeDasharray={visible ? undefined : '0.2 0.1'}
              />
            )
          })}
        </svg>

        {/* Region nodes */}
        {Object.entries(MAP_POSITIONS).map(([regionId, pos]) => {
          const region = getRegion(regionId)
          if (!region) return null

          const visible = visitedRegions.has(regionId)
          if (!visible) return null

          const style = getNodeStyle(region)
          const isCurrent = currentRegion === regionId

          return (
            <button
              key={regionId}
              onClick={() => teleportTo(regionId)}
              className={`absolute ${style.size} rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 hover:z-10 ${
                isCurrent ? 'ring-2 ring-pokemon-yellow ring-offset-2 ring-offset-gray-800 z-10 scale-110' : ''
              }`}
              style={{
                left: `${((pos.col + 0.5) / gridCols) * 100}%`,
                top: `${((pos.row + 0.5) / gridRows) * 100}%`,
                backgroundColor: style.bg,
                border: style.border,
              }}
              title={region.name}
            >
              {style.icon && <span className="text-[10px] sm:text-xs">{style.icon}</span>}
            </button>
          )
        })}

        {/* Labels for cities */}
        {Object.entries(MAP_POSITIONS).map(([regionId, pos]) => {
          const region = getRegion(regionId)
          if (!region || region.regionType !== 'city' && region.regionType !== 'dungeon') return null
          if (!visitedRegions.has(regionId)) return null

          return (
            <div
              key={`label-${regionId}`}
              className="absolute text-center pointer-events-none transform -translate-x-1/2"
              style={{
                left: `${((pos.col + 0.5) / gridCols) * 100}%`,
                top: `${((pos.row + 0.5) / gridRows) * 100 + 5}%`,
              }}
            >
              <span className="text-[7px] sm:text-[9px] text-white font-bold bg-gray-900/80 px-1 rounded whitespace-nowrap">
                {region.name}
              </span>
            </div>
          )
        })}

        {/* Player indicator */}
        {MAP_POSITIONS[currentRegion] && (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-full pointer-events-none z-20"
            style={{
              left: `${((MAP_POSITIONS[currentRegion].col + 0.5) / gridCols) * 100}%`,
              top: `${((MAP_POSITIONS[currentRegion].row + 0.5) / gridRows) * 100 - 3}%`,
            }}
          >
            <span className="text-sm sm:text-base animate-bounce inline-block">📍</span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-500 border border-gray-400" />
          <span>Route</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full border-2 border-yellow-500" style={{ backgroundColor: '#B8A038' }} />
          <span>Stadt / Arena</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-900 border border-gray-600" />
          <span>Dungeon</span>
        </div>
        <div className="flex items-center gap-1">
          <span>📍</span>
          <span>Dein Standort</span>
        </div>
      </div>
    </div>
  )
}
