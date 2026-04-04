import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S
const P = T.PATH

export const ARENA_ORANIA = {
  id: 'arena_orania',
  regionType: 'arena',
  name: 'Orania Arena',
  gymId: 3,
  parentCity: 'city_orania',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_orania', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  L, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AW, AW, AW, AW, AW, AF, AF, AF, AW, AW, AW, AW, AW, AF, AF, AF, AW],
    [AW, AF, AF, AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW, AF, AF, AF, AW],
    [AW, AF, AF, AW, AF, AW, AW, AW, AW, AW, AW, AW, AW, AF, AF, AW, AF, AF, AF, AW],
    [AW, AF, AF, AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW, AF, AF, AF, AW],
    [AW, AF, AF, AW, AW, AW, AF, AW, AW, AW, AW, AW, AF, AW, AW, AW, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AW, AW, AW, AW, AF, AW, AW, AW, AW, AW, AF, AW, AW, AW, AW, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AW, AW, AW, AW, AW, AW, AF, AF, AW, AW, AW, AW, AW, AW, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
