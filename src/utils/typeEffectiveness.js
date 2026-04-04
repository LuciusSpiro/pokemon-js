// Simplified type effectiveness chart
// Key = attacker type, value = { defenderType: multiplier }
// Missing entries = neutral (1x)
const CHART = {
  fire:     { grass: 2, water: 0.5, rock: 0.5, fire: 0.5, bug: 2, ice: 2 },
  water:    { fire: 2, grass: 0.5, water: 0.5, ground: 2, rock: 2 },
  grass:    { water: 2, fire: 0.5, grass: 0.5, ground: 2, rock: 2, poison: 0.5 },
  electric: { water: 2, ground: 0, electric: 0.5, flying: 2 },
  rock:     { fire: 2, flying: 2, ground: 0.5, fighting: 0.5 },
  ground:   { fire: 2, electric: 2, grass: 0.5, flying: 0, rock: 2, poison: 2 },
  psychic:  { poison: 2, fighting: 2, psychic: 0.5, dark: 0 },
  poison:   { grass: 2, poison: 0.5, ground: 0.5, psychic: 0.5, fairy: 2 },
  normal:   { rock: 0.5, ghost: 0 },
  fighting: { normal: 2, rock: 2, ice: 2, flying: 0.5, psychic: 0.5, ghost: 0 },
  flying:   { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5 },
  bug:      { grass: 2, psychic: 2, fire: 0.5, flying: 0.5, rock: 0.5 },
  ghost:    { ghost: 2, psychic: 2, normal: 0, dark: 0.5 },
  ice:      { grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5 },
  dragon:   { dragon: 2, fairy: 0 },
  dark:     { psychic: 2, ghost: 2, fighting: 0.5, dark: 0.5, fairy: 0.5 },
  fairy:    { fighting: 2, dragon: 2, dark: 2, fire: 0.5, poison: 0.5 },
  steel:    { rock: 2, ice: 2, fairy: 2, fire: 0.5, water: 0.5, electric: 0.5 },
}

export function getMultiplier(attackerTypes, defenderTypes) {
  let multiplier = 1
  for (const atkType of attackerTypes) {
    for (const defType of defenderTypes) {
      const eff = CHART[atkType]?.[defType]
      if (eff !== undefined) {
        multiplier *= eff
      }
    }
  }
  // Clamp to 0, 0.5, 1, or 2
  if (multiplier === 0) return 0
  if (multiplier < 1) return 0.5
  if (multiplier > 1) return 2
  return 1
}

export function getDamage(baseDamage, attackerTypes, defenderTypes) {
  const mult = getMultiplier(attackerTypes, defenderTypes)
  return Math.max(Math.round(baseDamage * mult), 1)
}

export function getEffectivenessLabel(multiplier) {
  if (multiplier === 0) return 'Wirkungslos!'
  if (multiplier < 1) return 'Nicht sehr effektiv...'
  if (multiplier > 1) return 'Sehr effektiv!'
  return ''
}
