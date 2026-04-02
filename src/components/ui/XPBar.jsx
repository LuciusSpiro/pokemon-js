import { usePlayerStore } from '../../stores/usePlayerStore'
import { xpForLevel, xpToNextLevel } from '../../utils/xpCalculator'

export default function XPBar({ className = '' }) {
  const { xp, level } = usePlayerStore()
  const getXPProgress = usePlayerStore((s) => s.getXPProgress)
  const progress = getXPProgress()
  const remaining = xpToNextLevel(xp)

  return (
    <div className={`${className}`}>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-pokemon-yellow font-bold">Lv. {level}</span>
        <span className="text-gray-400">{remaining} XP bis Lv. {level + 1}</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
        <div
          className="h-full bg-gradient-to-r from-pokemon-blue to-pokemon-yellow rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}
