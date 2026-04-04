import { T } from '../tileTypes'

const AW = T.ARENA_WALL, AF = T.ARENA_FLOOR, L = T.GYM_LEADER, So = T.GATE_S
const LV = T.LAVA

export const ARENA_ZINNOBERINSEL = {
  id: 'arena_zinnoberinsel',
  regionType: 'arena',
  name: 'Zinnoberinsel Arena',
  gymId: 7,
  parentCity: 'city_zinnoberinsel',
  spawnX: 9, spawnY: 13,
  gates: {
    south: { targetRegion: 'city_zinnoberinsel', spawnX: 9, spawnY: 6 },
  },
  leaderPosition: { x: 9, y: 2 },
  tiles: [
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW, AW],
    [AW, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, AW],
    [AW, LV, LV, AF, AF, AF, AF, AF, AF,  L, AF, AF, AF, AF, AF, AF, AF, LV, LV, AW],
    [AW, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, AW],
    [AW, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, AW],
    [AW, LV, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, LV, AW],
    [AW, LV, LV, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, LV, LV, AW],
    [AW, LV, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, LV, AW],
    [AW, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, AW],
    [AW, LV, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, LV, AW],
    [AW, LV, LV, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, LV, LV, AW],
    [AW, LV, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, LV, AW],
    [AW, LV, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, LV, AW],
    [AW, LV, LV, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, AF, LV, LV, AW],
    [AW, AW, AW, AW, AW, AW, AW, AW, AW, So, So, AW, AW, AW, AW, AW, AW, AW, AW, AW],
  ],
  pokemon: [],
}
