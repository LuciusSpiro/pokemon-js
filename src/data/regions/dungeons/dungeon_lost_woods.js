import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH
const N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W, F = T.FLOWER

const mazeSteps = [
  // Step 0: Initial clearing - open center, all 4 exits visible
  [
    [X, X, X, X, X, X, X, X, X, N, N, X, X, X, X, X, X, X, X, X],
    [X, X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X, X],
    [X, X, _, _, G, G, _, _, _, _, _, _, _, G, G, _, _, _, X, X],
    [X, _, _, _, G, G, _, _, F, _, _, F, _, G, G, _, _, _, _, X],
    [X, _, G, _, _, _, _, _, _, _, _, _, _, _, _, _, _, G, _, X],
    [X, _, G, _, _, _, _, G, G, _, _, G, G, _, _, _, _, G, _, X],
    [X, _, _, _, _, _, _, G, G, _, _, G, G, _, _, _, _, _, _, X],
    [Wg, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, E],
    [X, _, _, _, _, _, G, G, _, _, _, _, G, G, _, _, _, _, _, X],
    [X, _, _, _, _, _, G, _, _, _, _, _, _, G, _, _, _, _, _, X],
    [X, _, G, _, _, _, _, _, _, _, _, _, _, _, _, _, _, G, _, X],
    [X, _, G, _, _, F, _, _, _, _, _, _, _, _, F, _, _, G, _, X],
    [X, X, _, _, G, G, _, _, _, _, _, _, _, _, G, G, _, _, X, X],
    [X, X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X, X],
    [X, X, X, X, X, X, X, X, X, So, So, X, X, X, X, X, X, X, X, X],
  ],
  // Step 1: After correct first step (south) - trees shifted, flowers hint west
  [
    [X, X, X, X, X, X, X, X, X, N, N, X, X, X, X, X, X, X, X, X],
    [X, X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X, X],
    [X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X],
    [X, _, _, G, G, _, _, _, _, _, _, _, _, _, _, G, G, _, _, X],
    [X, _, _, G, G, _, _, _, _, _, _, _, _, _, _, G, G, _, _, X],
    [X, _, _, _, _, _, X, X, _, _, _, _, X, X, _, _, _, _, _, X],
    [X, _, _, _, _, _, X, _, _, _, _, _, _, X, _, _, _, _, _, X],
    [Wg, _, _, F, _, _, _, _, _, _, _, _, _, _, _, _, F, _, _, E],
    [X, _, _, F, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X],
    [X, _, _, _, _, _, X, _, _, _, _, _, _, X, _, _, _, _, _, X],
    [X, _, _, _, _, _, X, X, _, _, _, _, X, X, _, _, _, _, _, X],
    [X, _, _, G, G, _, _, _, _, _, _, _, _, _, _, G, G, _, _, X],
    [X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X],
    [X, X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X, X],
    [X, X, X, X, X, X, X, X, X, So, So, X, X, X, X, X, X, X, X, X],
  ],
  // Step 2: After correct second step (west) - more enclosed, flowers hint south
  [
    [X, X, X, X, X, X, X, X, X, N, N, X, X, X, X, X, X, X, X, X],
    [X, X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X, X],
    [X, X, _, _, _, G, _, _, _, _, _, _, _, _, G, _, _, _, X, X],
    [X, _, _, _, _, G, _, X, X, _, _, X, X, _, G, _, _, _, _, X],
    [X, _, _, _, _, _, _, X, _, _, _, _, X, _, _, _, _, _, _, X],
    [X, _, G, _, _, _, _, _, _, _, _, _, _, _, _, _, _, G, _, X],
    [X, _, G, _, _, _, _, _, _, _, _, _, _, _, _, _, _, G, _, X],
    [Wg, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, E],
    [X, _, G, _, _, _, _, _, _, F, F, _, _, _, _, _, _, G, _, X],
    [X, _, G, _, _, _, _, _, _, F, F, _, _, _, _, _, _, G, _, X],
    [X, _, _, _, _, _, _, X, _, _, _, _, X, _, _, _, _, _, _, X],
    [X, _, _, _, _, _, _, X, X, _, _, X, X, _, _, _, _, _, _, X],
    [X, X, _, _, _, G, _, _, _, _, _, _, _, _, G, _, _, _, X, X],
    [X, X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X, X],
    [X, X, X, X, X, X, X, X, X, So, So, X, X, X, X, X, X, X, X, X],
  ],
  // Step 3: Final step (after south again) - clear path to south, flowers near east exit hint
  [
    [X, X, X, X, X, X, X, X, X, N, N, X, X, X, X, X, X, X, X, X],
    [X, X, X, _, _, _, _, _, _, _, _, _, _, _, _, _, _, X, X, X],
    [X, X, _, _, X, X, _, _, _, _, _, _, _, _, X, X, _, _, X, X],
    [X, _, _, _, X, _, _, _, _, _, _, _, _, _, _, X, _, _, _, X],
    [X, _, G, _, _, _, _, _, _, _, _, _, _, _, _, _, _, G, _, X],
    [X, _, G, _, _, _, X, _, _, _, _, _, _, X, _, _, _, G, _, X],
    [X, _, _, _, _, _, X, _, _, _, _, _, _, X, _, _, _, _, _, X],
    [Wg, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, E],
    [X, _, _, _, _, _, X, _, _, _, _, _, _, X, _, _, _, F, _, X],
    [X, _, G, _, _, _, X, _, _, _, _, _, _, X, _, _, F, F, _, X],
    [X, _, G, _, _, _, _, _, _, _, _, _, _, _, _, _, _, G, _, X],
    [X, _, _, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _, _, X],
    [X, X, _, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _, X, X],
    [X, X, X, _, _, _, _, _, _, P, P, _, _, _, _, _, _, X, X, X],
    [X, X, X, X, X, X, X, X, X, So, So, X, X, X, X, X, X, X, X, X],
  ],
]

export const DUNGEON_LOST_WOODS = {
  id: 'dungeon_lost_woods',
  regionType: 'dungeon',
  name: 'Irrlichtwald',
  spawnX: 9, spawnY: 1,
  gates: {
    north: { targetRegion: 'route_7', spawnX: 9, spawnY: 13 },
    // south gate only accessible after solving maze
    south: { targetRegion: 'route_8', spawnX: 9, spawnY: 1, requiredFlag: 'lostWoodsCleared' },
  },
  maze: {
    sequence: ['south', 'west', 'south', 'east'],
    entranceX: 9,
    entranceY: 1,
  },
  // 4 tile grids, one per maze step (player sees different clearing each step)
  mazeSteps,
  tiles: mazeSteps[0],
  pokemon: [
    { id: 46, name: 'Paras',    weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 48, name: 'Bluzuk',   weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 43, name: 'Myrapla',  weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 47, name: 'Parasek',  weight: 8,  rarity: 'uncommon', encounterType: 'quiz' },
    { id: 49, name: 'Omot',     weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
