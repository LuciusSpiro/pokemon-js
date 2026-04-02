import { memo, useState, useEffect } from 'react'

// Spritesheet layout: 4 columns (walk frames), 4 rows (down, left, right, up)
const DIR_ROW = { down: 0, left: 1, right: 2, up: 3 }

const PlayerSprite = memo(function PlayerSprite({ x, y, facing, isMoving }) {
  const [walkFrame, setWalkFrame] = useState(0)

  // Animate walk cycle
  useEffect(() => {
    if (!isMoving) {
      setWalkFrame(0) // standing frame
      return
    }
    // Alternate between frames 1 and 3 (left step / right step)
    const interval = setInterval(() => {
      setWalkFrame((prev) => (prev === 1 ? 3 : 1))
    }, 150)
    return () => clearInterval(interval)
  }, [isMoving])

  const row = DIR_ROW[facing] || 0
  // Background position to show correct frame from spritesheet
  const bgX = -(walkFrame * 16)
  const bgY = -(row * 16)

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
      <div
        className="w-full h-full"
        style={{
          backgroundImage: 'url(/tiles/trainer.svg)',
          backgroundSize: '400% 400%',
          backgroundPosition: `${(walkFrame / 3) * 100}% ${(row / 3) * 100}%`,
          imageRendering: 'pixelated',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
        }}
      />
    </div>
  )
})

export default PlayerSprite
