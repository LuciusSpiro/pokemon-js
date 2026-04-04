import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_1 = {
  id: 'route_1',
  regionType: 'route',
  name: 'Route 1',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'city_marmoria', spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'city_azuria',   spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,_,_,G,G,_,_,P,P,P,P,P,P,_,_,G,G,_,_,X],
    [X,_,G,G,G,_,_,P,_,_,_,_,P,_,_,G,G,G,_,X],
    [X,G,G,_,_,_,_,P,_,F,F,_,P,_,_,_,_,G,G,X],
    [X,G,_,_,F,_,P,P,_,_,_,_,P,P,_,F,_,_,G,X],
    [X,_,_,_,_,_,P,_,_,_,_,_,_,P,_,_,_,_,_,X],
    [X,_,G,G,_,_,P,_,_,_,_,_,_,P,_,_,G,G,_,X],
    [X,G,G,G,_,P,P,_,_,_,_,_,_,P,P,_,G,G,G,X],
    [X,G,G,_,_,P,_,_,F,_,_,F,_,_,P,_,_,G,G,X],
    [X,_,_,_,_,P,_,_,_,_,_,_,_,_,P,_,_,_,_,X],
    [X,_,G,G,_,P,P,_,_,_,_,_,_,P,P,_,G,G,_,X],
    [X,G,G,G,_,_,P,_,_,_,_,_,_,P,_,_,G,G,G,X],
    [X,G,_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_,G,X],
    [X,_,_,_,G,G,_,P,P,P,P,P,P,_,G,G,_,_,_,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 16, name: 'Taubsi',    weight: 30, rarity: 'common',   encounterType: 'quiz' },
    { id: 19, name: 'Rattfratz', weight: 30, rarity: 'common',   encounterType: 'quiz' },
    { id: 10, name: 'Raupy',     weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 13, name: 'Hornliu',   weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 21, name: 'Habitak',   weight: 5,  rarity: 'uncommon', encounterType: 'quiz' },
  ],
}
