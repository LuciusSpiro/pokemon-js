import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const Gw = T.GATE_W

// Dead end 4: Final trick dead end from B3
export const DUNGEON_DARK_CAVE_DEAD4 = {
  id: 'dungeon_dark_cave_dead4',
  regionType: 'dungeon',
  name: 'Dunkelhoehle - Falle',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 1, spawnY: 7,
  gates: {
    west: { targetRegion: 'dungeon_dark_cave_3', spawnX: 18, spawnY: 6 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W, F, E, F,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W, F,W, F, F, E, F,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W, F,W,W,W,W, F,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W, F, F, F, F, F, F, F, E, F,W,W,W,W,W,W,W,W],
    [Gw,F, F, F,W,W,W,W,W,W,W, F,W,W,W,W,W,W,W,W],
    [W,W,W, F,W,W,W, F, E, F,W, F,W,W,W,W,W,W,W,W],
    [W,W,W, F, F, E, F, F,W,W,W, F, F, E, F,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 42, name: 'Golbat', weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 76, name: 'Geowaz', weight: 8, rarity: 'rare', encounterType: 'quiz' },
  ],
}
