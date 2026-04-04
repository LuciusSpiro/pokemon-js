import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_5 = {
  id: 'route_5',
  regionType: 'route',
  name: 'Route 5',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'city_azuria',    spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'city_prismania',  spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,X,G,G,X,X,_,P,P,P,P,P,P,_,X,X,G,G,X,X],
    [X,G,G,_,X,_,_,P,_,_,_,_,P,_,_,X,_,G,G,X],
    [X,X,_,_,_,_,P,P,_,X,X,_,P,P,_,_,_,_,X,X],
    [X,G,G,_,_,P,P,_,_,X,X,_,_,P,P,_,_,G,G,X],
    [X,X,G,_,_,P,_,_,G,G,G,G,_,_,P,_,_,G,X,X],
    [X,G,_,_,P,P,_,G,G,_,_,G,G,_,P,P,_,_,G,X],
    [X,_,_,P,P,_,_,G,_,_,_,_,G,_,_,P,P,_,_,X],
    [X,G,_,_,P,P,_,_,G,G,G,G,_,_,P,P,_,_,G,X],
    [X,X,G,_,_,P,_,_,_,G,G,_,_,_,P,_,_,G,X,X],
    [X,G,G,_,_,P,P,_,_,_,_,_,_,P,P,_,_,G,G,X],
    [X,X,_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_,X,X],
    [X,G,G,_,X,_,_,P,_,F,F,_,P,_,_,X,_,G,G,X],
    [X,X,G,G,X,X,_,P,P,P,P,P,P,_,X,X,G,G,X,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 43, name: 'Myrapla',   weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 69, name: 'Knofensa',  weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 46, name: 'Paras',     weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 48, name: 'Bluzuk',    weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 10, name: 'Raupy',     weight: 10, rarity: 'common',   encounterType: 'quiz' },
    { id: 11, name: 'Safcon',    weight: 5,  rarity: 'uncommon', encounterType: 'quiz' },
  ],
}
