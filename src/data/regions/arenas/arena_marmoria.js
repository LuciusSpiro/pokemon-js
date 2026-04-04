import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S
const P = T.PATH

export const ARENA_MARMORIA = {
  id: 'arena_marmoria',
  regionType: 'arena',
  name: 'Marmoria Arena',
  gymId: 1,
  parentCity: 'city_marmoria',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_marmoria', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  L, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
