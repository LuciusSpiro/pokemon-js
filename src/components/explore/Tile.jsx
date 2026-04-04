import { memo } from 'react'
import { T } from '../../data/regions/tileTypes'

// === SPRITESHEET 1: tilesNeu.png ===
// 1200x200px, 6 tiles in a row, each 200x200px
// Index: 0=Baum, 1=Gras, 2=Hohes Gras, 3=Weg, 4=Wasser, 5=Blumen
const SPRITE_1 = {
  [T.GRASS]:      1,
  [T.TALL_GRASS]: 2,
  [T.TREE]:       0,
  [T.PATH]:       3,
  [T.WATER]:      4,
  [T.FLOWER]:     5,
  [T.BUILDING]:   0,
  [T.SIGN]:       3,
  [T.FOREST_PATH]:3,
}

// === SPRITESHEET 2: moreTiles.png ===
// 1403x694px, 8 cols x 4 rows, each 172x172px with 4px gap
// Position: [col, row] (0-indexed)
const SPRITE_2 = {
  [T.TELEPORT_TILE]:  { c: 0, r: 0 },  // Wirbel/Teleport
  [T.SAND]:           { c: 1, r: 0 },  // Sand
  [T.BARRIER_CUT]:    { c: 5, r: 0 },  // Busch (Barriere)
  [T.ARENA_WALL]:     { c: 6, r: 0 },  // Arena-Wand
  [T.ARENA_FLOOR]:    { c: 7, r: 0 },  // Arena-Innen
  [T.BARRIER_SURF]:   { c: 0, r: 1 },  // Wasser-Surf
  [T.CAVE_WALL]:      { c: 4, r: 1 },  // Hoehlen-Eingang/Wand
  [T.CAVE_FLOOR]:     { c: 5, r: 1 },  // Hoehlen-Boden
  [T.CAVE_FLOOR_ENC]: { c: 6, r: 1 },  // Hoehlen-Stufen (Encounter)
  [T.DARK_FLOOR]:     { c: 0, r: 2 },  // Dunkel (leer)
  [T.DARK_FLOOR_ENC]: { c: 1, r: 2 },  // Dunkel-Boden
  [T.STONE_PATH]:     { c: 4, r: 2 },  // Stein-Boden
  [T.PUZZLE_BARRIER]: { c: 5, r: 2 },  // Puzzle-Barrier
  [T.LEDGE_D]:        { c: 7, r: 2 },  // Ledge-Sprung
  [T.PUZZLE_SWITCH]:  { c: 0, r: 3 },  // Schalter (rot)
  [T.LAVA]:           { c: 3, r: 3 },  // Lava
  [T.ICE_FLOOR]:      { c: 4, r: 3 },  // Eis
  [T.WARP_PAD]:       { c: 5, r: 3 },  // Warp-Pad (blau)
  [T.GYM_LEADER]:     { c: 6, r: 3 },  // Warp-Pad (rot) als Gym-Leader Marker
}

const TILESET_1_URL = `${import.meta.env.BASE_URL}tiles/tilesNeu.png`
const TILESET_2_URL = `${import.meta.env.BASE_URL}tiles/moreTiles.png`

// moreTiles.png grid: 8 cols x 4 rows, 172px tiles, 4px gap
const MT_TILE = 172
const MT_GAP = 4
const MT_STEP = MT_TILE + MT_GAP // 176px per cell
const MT_IMG_W = 1403
const MT_IMG_H = 694

// CSS fallbacks for gate tiles
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
  // Spritesheet 1 (tilesNeu.png)
  const idx1 = SPRITE_1[type]
  if (idx1 !== undefined) {
    const bgPosX = (idx1 / 5) * 100
    return (
      <div
        className={`select-none overflow-hidden ${
          type === T.TALL_GRASS ? 'tile-tall-grass' : ''
        } ${type === T.WATER ? 'tile-water' : ''}`}
        style={{
          backgroundImage: `url(${TILESET_1_URL})`,
          backgroundSize: '600% 100%',
          backgroundPosition: `${bgPosX}% 0%`,
          imageRendering: 'pixelated',
        }}
      />
    )
  }

  // Spritesheet 2 (moreTiles.png)
  const pos2 = SPRITE_2[type]
  if (pos2) {
    // Calculate pixel position in spritesheet
    const px = pos2.c * MT_STEP
    const py = pos2.r * MT_STEP
    // backgroundSize: scale so one 172px tile fills the div
    const bgSizeX = (MT_IMG_W / MT_TILE) * 100
    const bgSizeY = (MT_IMG_H / MT_TILE) * 100
    // backgroundPosition: offset to show correct tile
    const bgPosX = px > 0 ? (px / (MT_IMG_W - MT_TILE)) * 100 : 0
    const bgPosY = py > 0 ? (py / (MT_IMG_H - MT_TILE)) * 100 : 0

    return (
      <div
        className={`select-none overflow-hidden ${
          type === T.DARK_FLOOR || type === T.DARK_FLOOR_ENC ? 'tile-dark' : ''
        } ${type === T.ICE_FLOOR ? 'tile-ice' : ''}`}
        style={{
          backgroundImage: `url(${TILESET_2_URL})`,
          backgroundSize: `${bgSizeX}% ${bgSizeY}%`,
          backgroundPosition: `${bgPosX}% ${bgPosY}%`,
          imageRendering: 'pixelated',
        }}
      />
    )
  }

  // CSS fallback
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
