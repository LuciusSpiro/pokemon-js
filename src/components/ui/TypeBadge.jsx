import { TYPE_COLORS } from '../../utils/constants'

export default function TypeBadge({ type }) {
  const color = TYPE_COLORS[type] || '#888'
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white uppercase"
      style={{ backgroundColor: color }}
    >
      {type}
    </span>
  )
}
