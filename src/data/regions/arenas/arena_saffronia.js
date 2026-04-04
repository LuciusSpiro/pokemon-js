import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S
const WP = T.WARP_PAD

export const ARENA_SAFFRONIA = {
  id: 'arena_saffronia',
  regionType: 'arena',
  name: 'Saffronia Arena',
  gymId: 6,
  parentCity: 'city_saffronia',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_saffronia', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF,  L, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, WP, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, WP, AF, AF, AW],
    [AW, AF, AF, AF, AF, AW, AW, AF, AF, AF, AF, AF, AF, AW, AW, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AW, AF, AF, AF, AF, AF, AF, AF, AF, AW, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AW, AF, AF, AF, AF, AF, AF, AF, AF, AW, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AW, AW, AF, AF, AF, AF, AF, AF, AW, AW, AF, AF, AF, AF, AW],
    [AW, AF, AF, WP, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, WP, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
