import { memo } from 'react'
import { T } from '../../data/regions/tileTypes'

// Rich CSS-based pixel art tiles
const TILE_STYLES = {
  [T.GRASS]: {
    bg: 'linear-gradient(135deg, #6ABF4B 25%, #78C850 50%, #6ABF4B 75%)',
    className: '',
  },
  [T.TALL_GRASS]: {
    bg: '#4E8234',
    className: 'tile-tall-grass',
    overlay: (
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <div className="flex gap-[1px] mb-[1px]">
          <div className="w-[3px] h-[6px] bg-green-400 rounded-t-sm skew-x-[-8deg]" />
          <div className="w-[3px] h-[8px] bg-green-300 rounded-t-sm skew-x-[5deg]" />
          <div className="w-[3px] h-[5px] bg-green-500 rounded-t-sm skew-x-[-3deg]" />
          <div className="w-[3px] h-[7px] bg-green-400 rounded-t-sm skew-x-[8deg]" />
          <div className="w-[3px] h-[6px] bg-green-300 rounded-t-sm skew-x-[-5deg]" />
        </div>
      </div>
    ),
  },
  [T.TREE]: {
    bg: '#2D6A1E',
    className: '',
    overlay: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-[70%] h-[55%] bg-green-700 rounded-full shadow-inner" style={{background: 'radial-gradient(circle at 40% 40%, #4CAF50, #2E7D32 70%)'}} />
        <div className="w-[15%] h-[25%] bg-amber-800 rounded-sm" />
      </div>
    ),
  },
  [T.PATH]: {
    bg: 'linear-gradient(180deg, #D4B876 0%, #C8B070 50%, #BCA868 100%)',
    className: '',
    innerBorder: '1px solid rgba(0,0,0,0.08)',
  },
  [T.WATER]: {
    bg: 'linear-gradient(135deg, #4A80C8 0%, #5890D8 50%, #4A80C8 100%)',
    className: 'tile-water',
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="text-white text-[0.5em] font-bold">~</div>
      </div>
    ),
  },
  [T.BUILDING]: {
    bg: '#8B7355',
    className: '',
    overlay: (
      <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, #9B8365 0%, #7B6345 60%, #6B5335 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)'}}>
        <div className="absolute bottom-0 left-[20%] right-[20%] h-[40%] bg-amber-900/40 rounded-t-sm" />
      </div>
    ),
  },
  [T.GATE_N]: {
    bg: 'linear-gradient(180deg, #705830 0%, #A08050 100%)',
    className: '',
    overlay: <div className="absolute inset-0 flex items-center justify-center text-yellow-300/60 text-[0.6em]">▲</div>,
  },
  [T.GATE_E]: {
    bg: 'linear-gradient(270deg, #705830 0%, #A08050 100%)',
    className: '',
    overlay: <div className="absolute inset-0 flex items-center justify-center text-yellow-300/60 text-[0.6em]">▶</div>,
  },
  [T.GATE_S]: {
    bg: 'linear-gradient(0deg, #705830 0%, #A08050 100%)',
    className: '',
    overlay: <div className="absolute inset-0 flex items-center justify-center text-yellow-300/60 text-[0.6em]">▼</div>,
  },
  [T.GATE_W]: {
    bg: 'linear-gradient(90deg, #705830 0%, #A08050 100%)',
    className: '',
    overlay: <div className="absolute inset-0 flex items-center justify-center text-yellow-300/60 text-[0.6em]">◀</div>,
  },
  [T.GYM_DOOR]: {
    bg: '#B03030',
    className: '',
    overlay: (
      <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, #CC3333 0%, #AA2020 60%, #881818 100%)'}}>
        <div className="absolute inset-[15%] border-2 border-yellow-400/50 rounded-sm flex items-center justify-center">
          <div className="text-yellow-300 text-[0.5em] font-bold">⚔</div>
        </div>
      </div>
    ),
  },
  [T.SIGN]: {
    bg: '#C8B878',
    className: '',
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60%] h-[50%] bg-amber-700 rounded-sm border border-amber-900" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
          <div className="w-full h-[2px] bg-amber-600 mt-[25%]" />
          <div className="w-[70%] h-[2px] bg-amber-600 mt-[2px] mx-auto" />
        </div>
        <div className="absolute bottom-[10%] w-[10%] h-[25%] bg-amber-800" />
      </div>
    ),
  },
  [T.FLOWER]: {
    bg: 'linear-gradient(135deg, #6ABF4B 25%, #78C850 50%, #6ABF4B 75%)',
    className: '',
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-[4px] h-[4px] bg-red-400 rounded-full absolute -top-[2px] -left-[1px]" />
          <div className="w-[4px] h-[4px] bg-yellow-300 rounded-full absolute -top-[1px] left-[3px]" />
          <div className="w-[4px] h-[4px] bg-pink-400 rounded-full absolute top-[2px] left-[1px]" />
        </div>
      </div>
    ),
  },
}

const Tile = memo(function Tile({ type }) {
  const style = TILE_STYLES[type]
  if (!style) return <div className="bg-gray-900" />

  return (
    <div
      className={`relative select-none overflow-hidden ${style.className}`}
      style={{
        background: style.bg,
        boxShadow: style.innerBorder ? `inset 0 0 0 ${style.innerBorder}` : undefined,
        imageRendering: 'pixelated',
      }}
    >
      {style.overlay}
    </div>
  )
})

export default Tile
