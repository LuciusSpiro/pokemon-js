import { useState, useEffect } from 'react'
import { getRegion } from '../../data/regions/index'
import { TYPE_COLORS } from '../../utils/constants'

export default function GateTransition({ targetRegionId, onComplete }) {
  const [phase, setPhase] = useState('wipe-in') // wipe-in | name | wipe-out
  const region = getRegion(targetRegionId)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('name'), 500),
      setTimeout(() => setPhase('wipe-out'), 1500),
      setTimeout(onComplete, 2000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const typeColor = TYPE_COLORS[region?.type] || '#888'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Black overlay */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
          phase === 'wipe-out' ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Region name */}
      {phase === 'name' && region && (
        <div className="relative z-10 text-center animate-bounce-in">
          <div
            className="inline-block px-6 py-2 rounded-full text-white text-xs font-bold uppercase mb-2"
            style={{ backgroundColor: typeColor }}
          >
            {region.type}
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            {region.name}
          </h2>
        </div>
      )}
    </div>
  )
}
