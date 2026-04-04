export default function DarknessOverlay({ playerX, playerY, hasBadge, defaultRadius = 2, flashRadius = 5 }) {
  const radius = hasBadge ? flashRadius : defaultRadius
  // Convert tile position to percentage-based center
  const centerX = ((playerX + 0.5) / 20) * 100
  const centerY = ((playerY + 0.5) / 15) * 100
  // Radius as percentage of container width (approx)
  const radiusPct = (radius / 20) * 100

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none transition-all duration-300"
      style={{
        background: 'black',
        maskImage: `radial-gradient(circle ${radiusPct}vw at ${centerX}% ${centerY}%, transparent 0%, transparent 60%, black 100%)`,
        WebkitMaskImage: `radial-gradient(circle ${radiusPct}vw at ${centerX}% ${centerY}%, transparent 0%, transparent 60%, black 100%)`,
      }}
    />
  )
}
