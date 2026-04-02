import { REGION_1 } from './region1'
import { REGION_2 } from './region2'
import { REGION_3 } from './region3'
import { REGION_4 } from './region4'
import { REGION_5 } from './region5'
import { REGION_6 } from './region6'
import { REGION_7 } from './region7'
import { REGION_8 } from './region8'

export const REGIONS = [
  REGION_1, REGION_2, REGION_3, REGION_4,
  REGION_5, REGION_6, REGION_7, REGION_8,
]

export function getRegion(id) {
  return REGIONS.find((r) => r.id === id)
}

// Badge name → which regions unlock
export const BADGE_UNLOCK_MAP = {
  0: [1],                        // start: region 1
  'Felsorden': [1, 2, 3],       // beat gym 1: unlock 2+3
  'Quellorden': [1, 2, 3, 4],   // beat gym 2: unlock 4
  'Donnerorden': [1, 2, 3, 4, 5], // etc.
  'Farborden': [1, 2, 3, 4, 5, 6],
  'Seelenorden': [1, 2, 3, 4, 5, 6, 7],
  'Sumpforden': [1, 2, 3, 4, 5, 6, 7, 8],
  'Vulkanorden': [1, 2, 3, 4, 5, 6, 7, 8],
  'Erdorden': [1, 2, 3, 4, 5, 6, 7, 8],
}

export function getUnlockedRegions(badges) {
  let unlocked = [1]
  for (const badge of badges) {
    const regions = BADGE_UNLOCK_MAP[badge]
    if (regions) {
      unlocked = [...new Set([...unlocked, ...regions])]
    }
  }
  return unlocked.sort((a, b) => a - b)
}
