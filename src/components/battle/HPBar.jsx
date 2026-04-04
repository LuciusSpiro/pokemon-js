export default function HPBar({ current, max, label, className = '' }) {
  const pct = Math.max((current / max) * 100, 0)
  const color = pct > 50 ? 'bg-green-500' : pct > 20 ? 'bg-yellow-500' : 'bg-red-500'

  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-300 font-bold">{label}</span>
          <span className="text-gray-400">{current}/{max}</span>
        </div>
      )}
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
