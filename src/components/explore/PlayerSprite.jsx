import { memo, useState, useEffect } from 'react'

const FACING_CHAR = {
  down: '⬇',
  up: '⬆',
  left: '⬅',
  right: '➡',
}

const PlayerSprite = memo(function PlayerSprite({ x, y, facing, isMoving }) {
  const [step, setStep] = useState(false)

  useEffect(() => {
    if (!isMoving) return
    setStep((s) => !s)
  }, [isMoving, x, y])

  return (
    <div
      className="absolute z-10 pointer-events-none transition-all duration-150 ease-linear"
      style={{
        left: `${(x / 20) * 100}%`,
        top: `${(y / 15) * 100}%`,
        width: `${100 / 20}%`,
        height: `${100 / 15}%`,
      }}
    >
      {/* Player character - scaled up, overflows top */}
      <div className="w-full h-full flex items-end justify-center relative overflow-visible">
        {/* Shadow */}
        <div
          className="absolute bottom-0 w-[80%] h-[15%] rounded-full bg-black/30"
        />
        {/* Body - 2.5x tile height, anchored at bottom */}
        <div
          className="relative flex flex-col items-center"
          style={{
            transform: step ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.1s',
            marginBottom: '2px',
          }}
        >
          {/* Hat */}
          <div
            className="rounded-t-full"
            style={{
              width: '20px',
              height: '10px',
              backgroundColor: '#DC0A2D',
            }}
          />
          {/* Head */}
          <div
            className="rounded-sm"
            style={{
              width: '22px',
              height: '10px',
              backgroundColor: '#FFD5A0',
              marginTop: '-1px',
            }}
          />
          {/* Body */}
          <div
            className="rounded-sm"
            style={{
              width: '24px',
              height: '14px',
              backgroundColor: '#3B4CCA',
              marginTop: '-1px',
            }}
          />
          {/* Legs */}
          <div className="flex" style={{ gap: '2px', marginTop: '-1px' }}>
            <div
              className="rounded-b-sm"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#444',
                transform: step && (facing === 'up' || facing === 'down') ? 'translateY(-2px)' : '',
              }}
            />
            <div
              className="rounded-b-sm"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#444',
                transform: step && (facing === 'up' || facing === 'down') ? '' : 'translateY(-2px)',
              }}
            />
          </div>
          {/* Shoes */}
          <div className="flex" style={{ gap: '2px', marginTop: '-1px' }}>
            <div style={{ width: '9px', height: '4px', backgroundColor: '#8B4513', borderRadius: '0 0 2px 2px' }} />
            <div style={{ width: '9px', height: '4px', backgroundColor: '#8B4513', borderRadius: '0 0 2px 2px' }} />
          </div>
        </div>
      </div>
    </div>
  )
})

export default PlayerSprite
