// All regions keyed by string ID
const REGION_MAP = {}

// Cities
import { REGION_MARMORIA } from './cities/city_marmoria'
import { REGION_AZURIA } from './cities/city_azuria'
import { REGION_ORANIA } from './cities/city_orania'
import { REGION_PRISMANIA } from './cities/city_prismania'
import { REGION_FUCHSANIA } from './cities/city_fuchsania'
import { REGION_SAFFRONIA } from './cities/city_saffronia'
import { REGION_ZINNOBERINSEL } from './cities/city_zinnoberinsel'
import { REGION_VERTANIA } from './cities/city_vertania'

// Routes
import { ROUTE_1 } from './routes/route_1'
import { ROUTE_2 } from './routes/route_2'
import { ROUTE_3 } from './routes/route_3'
import { ROUTE_5 } from './routes/route_5'
import { ROUTE_6 } from './routes/route_6'
import { ROUTE_7 } from './routes/route_7'
import { ROUTE_8 } from './routes/route_8'
import { ROUTE_9 } from './routes/route_9'
import { ROUTE_10 } from './routes/route_10'
import { ROUTE_11 } from './routes/route_11'
import { ROUTE_12 } from './routes/route_12'
import { ROUTE_13 } from './routes/route_13'
import { ROUTE_14 } from './routes/route_14'

// Dungeons
import { DUNGEON_LOST_WOODS } from './dungeons/dungeon_lost_woods'
import { DUNGEON_DARK_CAVE } from './dungeons/dungeon_dark_cave'
import { DUNGEON_DARK_CAVE_2 } from './dungeons/dungeon_dark_cave_2'
import { DUNGEON_DARK_CAVE_3 } from './dungeons/dungeon_dark_cave_3'
import { DUNGEON_DARK_CAVE_4 } from './dungeons/dungeon_dark_cave_4'
import { DUNGEON_DARK_CAVE_DEAD1 } from './dungeons/dungeon_dark_cave_dead1'
import { DUNGEON_DARK_CAVE_DEAD2 } from './dungeons/dungeon_dark_cave_dead2'
import { DUNGEON_DARK_CAVE_DEAD3 } from './dungeons/dungeon_dark_cave_dead3'
import { DUNGEON_DARK_CAVE_DEAD4 } from './dungeons/dungeon_dark_cave_dead4'

// Arena Interiors
import { ARENA_MARMORIA } from './arenas/arena_marmoria'
import { ARENA_AZURIA } from './arenas/arena_azuria'
import { ARENA_ORANIA } from './arenas/arena_orania'
import { ARENA_PRISMANIA } from './arenas/arena_prismania'
import { ARENA_FUCHSANIA } from './arenas/arena_fuchsania'
import { ARENA_SAFFRONIA } from './arenas/arena_saffronia'
import { ARENA_ZINNOBERINSEL } from './arenas/arena_zinnoberinsel'
import { ARENA_VERTANIA } from './arenas/arena_vertania'

const ALL_REGIONS = [
  // Cities
  REGION_MARMORIA, REGION_AZURIA, REGION_ORANIA, REGION_PRISMANIA,
  REGION_FUCHSANIA, REGION_SAFFRONIA, REGION_ZINNOBERINSEL, REGION_VERTANIA,
  // Routes
  ROUTE_1, ROUTE_2, ROUTE_3, ROUTE_5, ROUTE_6, ROUTE_7,
  ROUTE_8, ROUTE_9, ROUTE_10, ROUTE_11, ROUTE_12, ROUTE_13, ROUTE_14,
  // Dungeons
  DUNGEON_LOST_WOODS, DUNGEON_DARK_CAVE,
  DUNGEON_DARK_CAVE_2, DUNGEON_DARK_CAVE_3, DUNGEON_DARK_CAVE_4,
  DUNGEON_DARK_CAVE_DEAD1, DUNGEON_DARK_CAVE_DEAD2,
  DUNGEON_DARK_CAVE_DEAD3, DUNGEON_DARK_CAVE_DEAD4,
  // Arenas
  ARENA_MARMORIA, ARENA_AZURIA, ARENA_ORANIA, ARENA_PRISMANIA,
  ARENA_FUCHSANIA, ARENA_SAFFRONIA, ARENA_ZINNOBERINSEL, ARENA_VERTANIA,
]

ALL_REGIONS.forEach((r) => { REGION_MAP[r.id] = r })

export function getRegion(id) {
  // Support both string IDs and legacy numeric IDs
  if (typeof id === 'number') {
    const legacyMap = {
      1: 'city_marmoria', 2: 'city_azuria', 3: 'city_orania', 4: 'city_prismania',
      5: 'city_fuchsania', 6: 'city_saffronia', 7: 'city_zinnoberinsel', 8: 'city_vertania',
    }
    return REGION_MAP[legacyMap[id]]
  }
  return REGION_MAP[id]
}

export function getAllRegions() {
  return ALL_REGIONS
}

// Gate-level unlock: check if a specific gate connection is accessible
export function isGateUnlocked(gate, badges, playerFlags) {
  // 🐐 Mighty Bob bypasses all locks
  if (playerFlags?.mightyBob) return true
  if (!gate.requiredBadge && !gate.requiredFlag) return true
  if (gate.requiredBadge && !badges.includes(gate.requiredBadge)) return false
  if (gate.requiredFlag && !playerFlags?.[gate.requiredFlag]) return false
  return true
}

// Get all regions a player can currently access
export function getUnlockedRegions(badges, playerFlags = {}) {
  // BFS from start region through unlocked gates
  const visited = new Set()
  const queue = ['city_marmoria']
  visited.add('city_marmoria')

  while (queue.length > 0) {
    const regionId = queue.shift()
    const region = REGION_MAP[regionId]
    if (!region?.gates) continue

    for (const gate of Object.values(region.gates)) {
      if (!visited.has(gate.targetRegion) && isGateUnlocked(gate, badges, playerFlags)) {
        visited.add(gate.targetRegion)
        queue.push(gate.targetRegion)
      }
    }
  }

  return [...visited]
}

// Legacy compat
export const REGIONS = ALL_REGIONS
