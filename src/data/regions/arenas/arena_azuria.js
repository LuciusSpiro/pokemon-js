import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S
const W = T.WATER, P = T.PATH

export const ARENA_AZURIA = {
  id: 'arena_azuria',
  regionType: 'arena',
  name: 'Azuria Arena',
  gymId: 2,
  parentCity: 'city_azuria',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_azuria', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW,  W,  W,  W, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF,  W,  W,  W, AW],
    [AW,  W,  W,  W, AF, AF, AF, AF, AF,  L, AF, AF, AF, AF, AF, AF,  W,  W,  W, AW],
    [AW,  W,  W,  W, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF,  W,  W,  W, AW],
    [AW,  W,  W,  W,  W, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF,  W,  W,  W,  W, AW],
    [AW,  W,  W,  W,  W,  W, AF, AF, AF,  P, AF, AF, AF, AF,  W,  W,  W,  W,  W, AW],
    [AW,  W,  W,  W,  W,  W,  W, AF, AF,  P, AF, AF,  W,  W,  W,  W,  W,  W,  W, AW],
    [AW,  W,  W,  W,  W,  W,  W, AF, AF,  P, AF, AF,  W,  W,  W,  W,  W,  W,  W, AW],
    [AW,  W,  W,  W,  W,  W, AF, AF, AF,  P, AF, AF, AF,  W,  W,  W,  W,  W,  W, AW],
    [AW,  W,  W,  W,  W, AF, AF, AF, AF,  P, AF, AF, AF, AF,  W,  W,  W,  W,  W, AW],
    [AW,  W,  W,  W, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF,  W,  W,  W,  W, AW],
    [AW,  W,  W, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF,  W,  W,  W, AW],
    [AW,  W, AF, AF, AF, AF, AF, AF, AF,  P, AF, AF, AF, AF, AF, AF, AF,  W,  W, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
