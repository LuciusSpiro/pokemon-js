import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_3 = {
  id: 'route_3',
  regionType: 'route',
  name: 'Route 3',
  spawnX: 9,
  spawnY: 7,
  gates: {
    west:  { targetRegion: 'route_2',      spawnX: 18, spawnY: 7, requiredBadge: 'Felsorden' },
    south: { targetRegion: 'city_orania',   spawnX: 9,  spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,X],
    [X,_,_,W,W,W,W,W,W,W,W,W,W,W,W,W,W,_,_,X],
    [X,_,_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_,_,X],
    [X,G,G,_,_,W,W,W,W,W,W,W,W,W,W,_,_,G,G,X],
    [X,G,G,_,_,_,W,W,W,P,P,W,W,W,_,_,_,G,G,X],
    [X,_,_,_,P,P,P,P,P,P,P,P,P,P,P,P,_,_,_,X],
    [Wg,Wg,P,P,P,_,_,_,_,P,P,_,_,_,_,P,P,_,_,X],
    [X,_,_,_,P,P,P,P,P,P,P,P,P,P,P,P,_,_,_,X],
    [X,G,G,_,_,_,W,W,W,P,P,W,W,W,_,_,_,G,G,X],
    [X,G,G,_,_,W,W,W,W,P,P,W,W,W,W,_,_,G,G,X],
    [X,_,_,_,W,W,W,W,_,P,P,_,W,W,W,W,_,_,_,X],
    [X,_,_,W,W,W,W,_,_,P,P,_,_,W,W,W,W,_,_,X],
    [X,_,_,W,W,W,_,_,P,P,P,P,_,_,W,W,W,_,_,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 72,  name: 'Tentacool', weight: 30, rarity: 'common',   encounterType: 'quiz' },
    { id: 118, name: 'Goldini',   weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 60,  name: 'Quapsel',   weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 129, name: 'Karpador',  weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 120, name: 'Sterndu',   weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
  ],
}
