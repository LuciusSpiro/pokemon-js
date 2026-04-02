import { memo } from 'react'
import { T } from '../../data/regions/tileTypes'

// tilesNeu.png: 1200x200px, 6 tiles in a row, each 200x200px
// Index: 0=Baum, 1=Gras, 2=Hohes Gras, 3=Weg, 4=Wasser, 5=Blumen

const SPRITE_INDEX = {
  [T.GRASS]:      1,
  [T.TALL_GRASS]: 2,
  [T.TREE]:       0,
  [T.PATH]:       3,
  [T.WATER]:      4,
  [T.FLOWER]:     5,
  [T.BUILDING]:   0,  // use tree as fallback for now
  [T.SIGN]:       3,  // use path as fallback
  [T.FENCE]:      0,  // use tree as fallback
}

const TILESET_URL = `${import.meta.env.BASE_URL}tiles/tilesNeu.png`

// CSS fallbacks for gates and gym door
const CSS_TILES = {
  [T.GATE_N]: { bg: 'linear-gradient(180deg, #705830 0%, #A08050 100%)', overlay: '▲' },
  [T.GATE_E]: { bg: 'linear-gradient(270deg, #705830 0%, #A08050 100%)', overlay: '▶' },
  [T.GATE_S]: { bg: 'linear-gradient(0deg, #705830 0%, #A08050 100%)', overlay: '▼' },
  [T.GATE_W]: { bg: 'linear-gradient(90deg, #705830 0%, #A08050 100%)', overlay: '◀' },
  [T.GYM_DOOR]: {
    bg: 'linear-gradient(180deg, #CC3333 0%, #881818 100%)',
    overlay: '⚔',
    border: '2px solid #FFD700',
  },
}

const Tile = memo(function Tile({ type }) {
  const index = SPRITE_INDEX[type]

  if (index !== undefined) {
    // 6 tiles in a row: backgroundPosition-x as percentage (0%, 20%, 40%, 60%, 80%, 100%)
    const bgPosX = (index / 5) * 100

    return (
      <div
        className={`select-none overflow-hidden ${
          type === T.TALL_GRASS ? 'tile-tall-grass' : ''
        } ${type === T.WATER ? 'tile-water' : ''}`}
        style={{
          backgroundImage: `url(${TILESET_URL})`,
          backgroundSize: '600% 100%',
          backgroundPosition: `${bgPosX}% 0%`,
          imageRendering: 'pixelated',
        }}
      />
    )
  }

  const css = CSS_TILES[type]
  if (css) {
    return (
      <div
        className="relative select-none overflow-hidden flex items-center justify-center"
        style={{ background: css.bg, border: css.border || undefined }}
      >
        {css.overlay && (
          <span className="text-yellow-300/70 text-[0.6em] leading-none font-bold">
            {css.overlay}
          </span>
        )}
      </div>
    )
  }

  return <div className="bg-gray-900" />
})

export default Tile
