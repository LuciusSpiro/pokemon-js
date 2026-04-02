import { memo } from 'react'
import { TILE_META } from '../../data/regions/tileTypes'

const Tile = memo(function Tile({ type }) {
  const meta = TILE_META[type]
  if (!meta) return <div className="bg-gray-900" />

  return (
    <div
      className={`relative flex items-center justify-center select-none overflow-hidden ${
        meta.encounter ? 'tile-tall-grass' : ''
      } ${type === 4 ? 'tile-water' : ''}`}
      style={{ backgroundColor: meta.bg }}
    >
      {meta.emoji && (
        <span
          className="text-[0.6em] sm:text-[0.7em] leading-none"
          style={meta.textColor ? { color: meta.textColor } : undefined}
        >
          {meta.emoji}
        </span>
      )}
    </div>
  )
})

export default Tile
