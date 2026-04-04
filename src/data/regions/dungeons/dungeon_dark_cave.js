import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const N = T.GATE_N, So = T.GATE_S, Gt = T.GATE_E, Gw = T.GATE_W

// Floor 1: Entry floor - multiple exits, some are dead ends
export const DUNGEON_DARK_CAVE = {
  id: 'dungeon_dark_cave',
  regionType: 'dungeon',
  name: 'Dunkelhoehle B1',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 9, spawnY: 1,
  gates: {
    north: { targetRegion: 'route_12', spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'dungeon_dark_cave_2', spawnX: 9, spawnY: 1 },
    east:  { targetRegion: 'dungeon_dark_cave_dead1', spawnX: 1, spawnY: 7 },
    west:  { targetRegion: 'dungeon_dark_cave_dead2', spawnX: 18, spawnY: 7 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W,W, N, N,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W, F, F, F, F,W,W,W,W,W,W,W,W],
    [W,W,W, F, E, F, F, F, F,W,W, F,W,W,W,W,W,W,W,W],
    [W,W,W, F,W,W,W,W,W,W,W, F,W,W, F, E, F,W,W,W],
    [W,W,W, F,W,W,W,W,W,W,W, F,W,W, F,W, F,W,W,W],
    [W, F, E, F,W,W, F, E, F, F, F, F, F, F, F,W, F,W,W,W],
    [W, F,W,W,W,W, F,W,W,W,W,W,W,W,W,W, F,W,W,W],
    [Gw,F,W,W,W,W, F,W, F, E, F, F,W,W,W,W, F, E, F,Gt],
    [W, F,W,W,W,W, F,W, F,W,W, F,W,W,W,W,W,W, F,W],
    [W, F, E, F, F, F, F,W, F,W,W, F, F, E, F,W,W,W, F,W],
    [W,W,W,W,W,W,W,W, F,W,W,W,W,W, F,W,W,W, F,W],
    [W,W,W,W, F, E, F, F, F, F, F,W,W,W, F,W, F, E, F,W],
    [W,W,W,W, F,W,W,W,W,W, F,W,W,W, F, F, F,W,W,W],
    [W,W,W,W, F, F, F, F, F, F, F, F, F, F, F,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,So,So,So,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 41,  name: 'Zubat',      weight: 30, rarity: 'common',   encounterType: 'quiz' },
    { id: 74,  name: 'Kleinstein', weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 75,  name: 'Georok',     weight: 8,  rarity: 'uncommon', encounterType: 'quiz' },
    { id: 95,  name: 'Onix',       weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
