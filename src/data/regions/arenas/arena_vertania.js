import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S
const IC = T.ICE_FLOOR

export const ARENA_VERTANIA = {
  id: 'arena_vertania',
  regionType: 'arena',
  name: 'Vertania Arena',
  gymId: 8,
  parentCity: 'city_vertania',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_vertania', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  L, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AW, AW, AF, AF, AW, AW, AF, AW, AW, AF, AF, AW, AW, AF, AF, AF, AW],
    [AW, AF, AF, AW, IC, IC, IC, IC, IC, IC, IC, IC, IC, IC, IC, AW, AF, AF, AF, AW],
    [AW, AF, AF, AF, IC, AW, AW, IC, IC, IC, IC, IC, AW, AW, IC, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, IC, AW, IC, IC, IC, IC, IC, IC, IC, AW, IC, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, IC, IC, IC, IC, AW, AW, AW, IC, IC, IC, IC, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, IC, AW, IC, IC, IC, IC, IC, IC, IC, AW, IC, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, IC, AW, AW, IC, IC, IC, IC, IC, AW, AW, IC, AF, AF, AF, AF, AW],
    [AW, AF, AF, AW, IC, IC, IC, IC, IC, IC, IC, IC, IC, IC, IC, AW, AF, AF, AF, AW],
    [AW, AF, AF, AW, AW, AF, AF, AW, AW, AF, AW, AW, AF, AF, AW, AW, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
