import { TYPE_COLORS } from '../../utils/constants'

export default function Badge({ name, type, earned = false, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
  }

  const color = TYPE_COLORS[type] || '#888'

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold border-2 transition-all ${
        earned
          ? 'border-pokemon-yellow shadow-lg shadow-pokemon-yellow/30'
          : 'border-gray-600 opacity-30 grayscale'
      }`}
      style={{ backgroundColor: earned ? color : '#374151' }}
      title={earned ? name : `${name} (noch nicht verdient)`}
    >
      {earned ? '★' : '?'}
    </div>
  )
}
