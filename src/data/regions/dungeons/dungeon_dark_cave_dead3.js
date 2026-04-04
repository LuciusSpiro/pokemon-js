import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const Gw = T.GATE_W

// Dead end 3: Longer winding dead end from B2
export const DUNGEON_DARK_CAVE_DEAD3 = {
  id: 'dungeon_dark_cave_dead3',
  regionType: 'dungeon',
  name: 'Dunkelhoehle - Tiefe Sackgasse',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 1, spawnY: 7,
  gates: {
    west: { targetRegion: 'dungeon_dark_cave_2', spawnX: 18, spawnY: 7 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W, F, E, F, F, F,W,W,W,W,W, F, E, F,W,W,W,W,W],
    [W,W, F,W,W,W, F, F, F, E, F, F, F,W, F, F, F,W,W,W],
    [W,W, F,W,W,W,W,W,W,W,W,W,W,W,W,W, F,W,W,W],
    [W,W, F, F, E, F,W, F, E, F,W, F, E, F,W,W, F, E,W,W],
    [W,W,W,W,W, F,W, F,W,W,W, F,W, F,W,W,W,W,W,W],
    [Gw,F, F, F, F, F,W, F,W,W,W, F,W, F, F, F, F, F,W,W],
    [W,W,W,W,W, F,W, F, F, F, F, F,W,W,W,W,W, F,W,W],
    [W,W, F, E, F, F,W,W,W,W,W,W,W,W, F, E, F, F,W,W],
    [W,W, F,W,W,W,W,W,W,W,W,W,W,W, F,W,W,W,W,W],
    [W,W, F, F, F, F, F, F, F, F, F, F, F, F, F,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 42, name: 'Golbat', weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 95, name: 'Onix', weight: 8, rarity: 'rare', encounterType: 'quiz' },
  ],
}
