import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S
const X = T.TREE

export const ARENA_PRISMANIA = {
  id: 'arena_prismania',
  regionType: 'arena',
  name: 'Prismania Arena',
  gymId: 4,
  parentCity: 'city_prismania',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_prismania', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF,  X,  X, AF,  X,  X, AF, AF,  L, AF, AF,  X,  X, AF,  X,  X, AF, AF, AW],
    [AW, AF,  X, AF, AF, AF,  X, AF, AF, AF, AF, AF,  X, AF, AF, AF,  X, AF, AF, AW],
    [AW, AF, AF, AF,  X, AF, AF, AF,  X, AF, AF,  X, AF, AF,  X, AF, AF, AF, AF, AW],
    [AW, AF,  X, AF,  X, AF,  X,  X,  X, AF, AF,  X,  X,  X, AF,  X, AF, AF, AF, AW],
    [AW, AF,  X, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF,  X, AF, AW],
    [AW, AF,  X,  X,  X, AF,  X, AF,  X,  X,  X,  X, AF,  X, AF,  X,  X,  X, AF, AW],
    [AW, AF, AF, AF, AF, AF,  X, AF, AF, AF, AF, AF, AF,  X, AF, AF, AF, AF, AF, AW],
    [AW, AF,  X, AF,  X,  X,  X, AF,  X, AF, AF,  X, AF,  X,  X,  X, AF,  X, AF, AW],
    [AW, AF,  X, AF, AF, AF, AF, AF,  X, AF, AF,  X, AF, AF, AF, AF, AF,  X, AF, AW],
    [AW, AF, AF, AF,  X, AF,  X, AF, AF, AF, AF, AF, AF,  X, AF,  X, AF, AF, AF, AW],
    [AW, AF, AF, AF,  X, AF,  X,  X, AF, AF, AF, AF,  X,  X, AF,  X, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
