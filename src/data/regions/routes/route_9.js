import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const B = T.BUILDING, F = T.FLOWER
const N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_9 = {
  id: 'route_9',
  regionType: 'route',
  name: 'Route 9',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'city_prismania',  spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'city_saffronia',  spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,_,_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_,_,X],
    [X,_,B,B,_,_,P,_,_,_,_,_,_,P,_,_,B,B,_,X],
    [X,_,B,B,_,_,P,_,_,G,G,_,_,P,_,_,B,B,_,X],
    [X,_,_,_,_,P,P,_,G,G,G,G,_,P,P,_,_,_,_,X],
    [X,_,_,_,_,P,_,_,G,_,_,G,_,_,P,_,_,_,_,X],
    [X,_,B,B,_,P,_,_,_,_,_,_,_,_,P,_,B,B,_,X],
    [X,_,B,B,_,P,P,_,_,_,_,_,_,P,P,_,B,B,_,X],
    [X,_,_,_,_,_,P,_,_,_,_,_,_,P,_,_,_,_,_,X],
    [X,_,_,_,_,_,P,_,_,G,G,_,_,P,_,_,_,_,_,X],
    [X,_,B,B,_,P,P,_,G,G,G,G,_,P,P,_,B,B,_,X],
    [X,_,B,B,_,P,_,_,_,G,G,_,_,_,P,_,B,B,_,X],
    [X,_,_,_,_,P,_,_,_,_,_,_,_,_,P,_,_,_,_,X],
    [X,_,_,_,_,P,P,P,P,P,P,P,P,P,P,_,_,_,_,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 63, name: 'Abra',     weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 96, name: 'Traumato', weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 52, name: 'Mauzi',    weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 19, name: 'Rattfratz',weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 64, name: 'Kadabra',  weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 97, name: 'Hypno',    weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
