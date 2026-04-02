export function xpForLevel(level) {
  if (level <= 1) return 0
  return Math.floor(Math.pow(level, 3) * 0.8)
}

export function calculateLevel(totalXP) {
  let level = 1
  while (xpForLevel(level + 1) <= totalXP) {
    level++
  }
  return level
}

export function xpToNextLevel(totalXP) {
  const currentLevel = calculateLevel(totalXP)
  return xpForLevel(currentLevel + 1) - totalXP
}
