import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S

export const ARENA_FUCHSANIA = {
  id: 'arena_fuchsania',
  regionType: 'arena',
  name: 'Fuchsania Arena',
  gymId: 5,
  parentCity: 'city_fuchsania',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_fuchsania', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  L, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AW, AW, AF, AF, AF, AF, AF, AF, AF, AF, AW, AW, AF, AF, AF, AW],
    [AW, AF, AF, AF, AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW, AF, AF, AF, AW],
    [AW, AF, AF, AF, AW, AW, AF, AF, AF, AF, AF, AF, AF, AF, AW, AW, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
