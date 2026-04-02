import { memo } from 'react'

const FACING_EMOJI = {
  up: '🧑',
  down: '🧑',
  left: '🧑',
  right: '🧑',
}

const PlayerSprite = memo(function PlayerSprite({ x, y, facing, isMoving }) {
  return (
    <div
      className="absolute z-10 flex items-center justify-center transition-all duration-150 ease-linear pointer-events-none"
      style={{
        gridColumn: x + 1,
        gridRow: y + 1,
        left: `${(x / 20) * 100}%`,
        top: `${(y / 15) * 100}%`,
        width: `${100 / 20}%`,
        height: `${100 / 15}%`,
      }}
    >
      <span
        className={`text-[1.2em] sm:text-[1.4em] leading-none ${
          isMoving ? 'animate-bounce' : ''
        }`}
        style={{
          transform: facing === 'left' ? 'scaleX(-1)' : undefined,
          filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))',
        }}
      >
        🚶
      </span>
    </div>
  )
})

export default PlayerSprite
