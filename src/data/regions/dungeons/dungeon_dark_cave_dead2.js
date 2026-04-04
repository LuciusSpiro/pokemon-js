import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const Gt = T.GATE_E

// Dead end 2: Winding dead end, exit back east to B1
export const DUNGEON_DARK_CAVE_DEAD2 = {
  id: 'dungeon_dark_cave_dead2',
  regionType: 'dungeon',
  name: 'Dunkelhoehle - Irrweg',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 18, spawnY: 7,
  gates: {
    east: { targetRegion: 'dungeon_dark_cave', spawnX: 1, spawnY: 5 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W, F, E, F, F,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W, F,W,W, F,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W, F, E, F,W,W, F, F, E, F, F, F, E, F, F,W,W],
    [W,W,W,W, F,W,W,W,W,W,W,W,W,W,W,W,W, F,W,W],
    [W,W,W,W, F, F, E, F,W,W,W, F, E, F,W,W, F, F, F,Gt],
    [W,W,W,W,W,W,W, F,W,W,W, F,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W, F, F, F, F, F,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 41, name: 'Zubat', weight: 30, rarity: 'common', encounterType: 'quiz' },
    { id: 75, name: 'Georok', weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
  ],
}
