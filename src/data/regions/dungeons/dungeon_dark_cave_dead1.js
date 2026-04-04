import { T } from '../tileTypes'

const W = T.CAVE_WALL, F = T.DARK_FLOOR, E = T.DARK_FLOOR_ENC
const Gw = T.GATE_W

// Dead end 1: Small room, only exit is back west to B1
export const DUNGEON_DARK_CAVE_DEAD1 = {
  id: 'dungeon_dark_cave_dead1',
  regionType: 'dungeon',
  name: 'Dunkelhoehle - Sackgasse',
  dark: true,
  darkRadius: { default: 2, withFlash: 5 },
  flashBadge: 'Sumpforden',
  spawnX: 1, spawnY: 7,
  gates: {
    west: { targetRegion: 'dungeon_dark_cave', spawnX: 18, spawnY: 7 },
  },
  tiles: [
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W, F, E, F, F, F,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W, F,W,W,W, F,W,W,W, F, E, F,W,W,W,W,W,W],
    [W,W,W, F,W,W,W, F, F, F, F, F,W, F,W,W,W,W,W,W],
    [W,W,W, F,W,W,W,W,W,W,W,W,W, F,W,W,W,W,W,W],
    [Gw,F, F, F,W,W,W, F, E, F,W,W,W, F, E, F,W,W,W,W],
    [W,W,W, F,W,W,W, F,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W, F, F, F, F, F,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  ],
  pokemon: [
    { id: 41, name: 'Zubat', weight: 30, rarity: 'common', encounterType: 'quiz' },
    { id: 74, name: 'Kleinstein', weight: 20, rarity: 'common', encounterType: 'quiz' },
  ],
}
