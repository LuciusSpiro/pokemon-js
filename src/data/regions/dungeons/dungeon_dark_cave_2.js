import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const N = T.GATE_N, So = T.GATE_S, Gt = T.GATE_E, Gw = T.GATE_W

// Floor 2: Main maze floor - complex with many branches and dead ends
export const DUNGEON_DARK_CAVE_2 = {
  id: 'dungeon_dark_cave_2',
  regionType: 'dungeon',
  name: 'Dunkelhoehle B2',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 9, spawnY: 1,
  gates: {
    north: { targetRegion: 'dungeon_dark_cave', spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'dungeon_dark_cave_3', spawnX: 9, spawnY: 1 },
    east:  { targetRegion: 'dungeon_dark_cave_dead3', spawnX: 1, spawnY: 7 },
    west:  { targetRegion: 'dungeon_dark_cave', spawnX: 17, spawnY: 9 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W, N, N, N,W,W,W,W,W,W,W,W,W],
    [W,W, F, E, F,W,W,W, F, F, F,W,W,W, F, E, F, F,W,W],
    [W,W, F,W, F, F, F,W, F,W, F, F, F, F, F,W,W, F,W,W],
    [W, F, F,W,W,W, F,W, F,W,W,W, F,W, F,W,W, F,W,W],
    [W, F,W,W,W,W, F, F, F,W,W,W, F,W, F, F, F, F,W,W],
    [W, F,W, F, E, F, F,W,W,W,W,W, F,W,W,W,W, F,W,W],
    [W, F, F, F,W,W,W,W, F, E, F, F, F,W, F, E, F, F,W,W],
    [Gw,F,W,W,W,W,W,W, F,W,W,W,W,W, F,W,W, F, F,Gt],
    [W, F,W, F, E, F,W,W, F,W, F, E, F,W, F,W,W,W,W,W],
    [W, F,W, F,W, F, F, F, F, F, F,W, F, F, F, F, F,W,W,W],
    [W, F, F, F,W,W,W,W,W,W,W,W,W,W,W,W, F,W,W,W],
    [W,W,W, F,W, F, E, F,W,W,W, F, E, F,W,W, F,W,W,W],
    [W,W,W, F, F, F,W, F, F, F, F, F,W, F, F, F, F,W,W,W],
    [W,W,W,W,W,W,W,W, F, F, F,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,So,So,So,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 41,  name: 'Zubat',      weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 74,  name: 'Kleinstein', weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 75,  name: 'Georok',     weight: 12, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 95,  name: 'Onix',       weight: 8,  rarity: 'rare',     encounterType: 'quiz' },
    { id: 42,  name: 'Golbat',     weight: 6,  rarity: 'uncommon', encounterType: 'quiz' },
  ],
}
