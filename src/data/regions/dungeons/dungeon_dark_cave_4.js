import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const N = T.GATE_N, So = T.GATE_S

// Floor 4: Exit floor - final stretch, one correct path to the south exit
export const DUNGEON_DARK_CAVE_4 = {
  id: 'dungeon_dark_cave_4',
  regionType: 'dungeon',
  name: 'Dunkelhoehle B4',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 9, spawnY: 1,
  gates: {
    north: { targetRegion: 'dungeon_dark_cave_3', spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'route_14', spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W, N, N, N,W,W,W,W,W,W,W,W,W],
    [W,W,W,W, F, E, F, F, F, F, F, F, F, E, F,W,W,W,W,W],
    [W, F, E, F, F,W,W,W,W,W,W,W,W,W, F, F, E, F,W,W],
    [W, F,W,W,W,W,W, F, E, F,W, F, E, F,W,W,W, F,W,W],
    [W, F,W, F, E, F,W, F,W, F,W, F,W, F,W, F, E, F,W,W],
    [W, F,W, F,W, F,W, F,W, F,W, F,W,W,W, F,W,W,W,W],
    [W, F, F, F,W, F, F, F,W, F,W, F, F, F, F, F,W,W,W,W],
    [W,W,W,W,W,W,W,W,W, F,W,W,W,W,W,W,W, F, E,W],
    [W, F, E, F,W, F, E, F,W, F, F, E, F,W,W, F, F, F,W,W],
    [W, F,W, F,W, F,W, F,W,W,W,W, F,W,W, F,W,W,W,W],
    [W, F,W, F, F, F,W, F, F, F,W,W, F, F, E, F,W,W,W,W],
    [W, F,W,W,W,W,W,W,W, F,W,W,W,W,W,W,W,W,W,W],
    [W, F, F, E, F,W,W,W,W, F, F, F,W,W,W,W,W,W,W,W],
    [W,W,W,W, F, F, F, F, F, F,W, F, F, F, F, F, F,W,W,W],
    [W,W,W,W,W,W,W,W,So,So,So,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 42,  name: 'Golbat',     weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 76,  name: 'Geowaz',     weight: 10, rarity: 'rare',     encounterType: 'quiz' },
    { id: 95,  name: 'Onix',       weight: 8,  rarity: 'rare',     encounterType: 'quiz' },
    { id: 142, name: 'Aerodactyl', weight: 2,  rarity: 'legendary', encounterType: 'code' },
  ],
}
