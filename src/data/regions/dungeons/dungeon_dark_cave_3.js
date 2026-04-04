import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const N = T.GATE_N, So = T.GATE_S, Gt = T.GATE_E

// Floor 3: Deep floor - twisted path to exit, more dead ends
export const DUNGEON_DARK_CAVE_3 = {
  id: 'dungeon_dark_cave_3',
  regionType: 'dungeon',
  name: 'Dunkelhoehle B3',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 9, spawnY: 1,
  gates: {
    north: { targetRegion: 'dungeon_dark_cave_2', spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'dungeon_dark_cave_4', spawnX: 9, spawnY: 1 },
    east:  { targetRegion: 'dungeon_dark_cave_dead4', spawnX: 1, spawnY: 7 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W, N, N, N,W,W,W,W,W,W,W,W,W],
    [W, F, E, F,W,W,W,W, F, F, F,W,W,W, F, F, F, E, F,W],
    [W, F,W, F, F, F,W,W, F,W,W, F, F, F, F,W,W,W, F,W],
    [W, F,W,W,W, F,W, F, F,W,W,W,W, F,W,W,W,W, F,W],
    [W, F, F, E, F, F,W, F,W,W, F, E, F, F,W, F, E, F, F,W],
    [W,W,W,W,W, F, F, F,W,W, F,W,W,W,W, F,W,W,W,W],
    [W, F, E, F, F, F,W,W,W,W, F,W, F, E, F, F, F, F, F,Gt],
    [W, F,W,W,W,W,W, F, E, F, F,W, F,W,W,W,W,W,W,W],
    [W, F, F, F,W,W,W, F,W,W, F, F, F,W,W, F, E, F,W,W],
    [W,W,W, F,W, F, E, F,W,W,W,W,W,W,W, F,W, F,W,W],
    [W, F, F, F, F, F,W, F,W,W,W, F, E, F, F, F,W, F,W,W],
    [W, F,W,W,W,W,W, F,W,W,W, F,W,W,W,W,W, F,W,W],
    [W, F, E, F,W,W,W, F, F, F, F, F,W,W,W, F, F, F,W,W],
    [W,W,W, F, F, F, F, F,W, F, F, F, F, F, F, F,W,W,W,W],
    [W,W,W,W,W,W,W,W,So,So,So,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 42,  name: 'Golbat',     weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 75,  name: 'Georok',     weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 95,  name: 'Onix',       weight: 10, rarity: 'rare',     encounterType: 'quiz' },
    { id: 76,  name: 'Geowaz',     weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
