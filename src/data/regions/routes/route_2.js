import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_2 = {
  id: 'route_2',
  regionType: 'route',
  name: 'Route 2',
  spawnX: 9,
  spawnY: 7,
  gates: {
    west: { targetRegion: 'city_marmoria', spawnX: 18, spawnY: 7 },
    east: { targetRegion: 'route_3',       spawnX: 1,  spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,_,_,G,G,X,_,_,_,G,G,_,_,_,X,G,G,_,_,X],
    [X,_,G,G,_,X,_,_,G,G,G,G,_,_,X,_,G,G,_,X],
    [X,_,_,_,_,_,_,G,G,_,_,G,G,_,_,_,_,_,_,X],
    [X,G,G,_,_,_,P,P,P,_,_,P,P,P,_,_,_,G,G,X],
    [X,G,G,_,_,P,P,_,_,_,_,_,_,P,P,_,_,G,G,X],
    [X,_,_,_,P,P,_,_,F,_,_,F,_,_,P,P,_,_,_,X],
    [Wg,Wg,P,P,P,_,_,_,_,_,_,_,_,_,_,P,P,P,E,E],
    [X,_,_,_,P,P,_,_,_,_,_,_,_,_,P,P,_,_,_,X],
    [X,G,G,_,_,P,P,_,_,F,F,_,_,P,P,_,_,G,G,X],
    [X,G,G,_,_,_,P,P,P,P,P,P,P,P,_,_,_,G,G,X],
    [X,_,_,_,_,_,_,G,G,_,_,G,G,_,_,_,_,_,_,X],
    [X,_,G,G,_,X,_,_,G,G,G,G,_,_,X,_,G,G,_,X],
    [X,_,_,G,G,X,_,_,_,G,G,_,_,_,X,G,G,_,_,X],
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 16, name: 'Taubsi',   weight: 30, rarity: 'common',   encounterType: 'quiz' },
    { id: 13, name: 'Hornliu',  weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 21, name: 'Habitak',  weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 19, name: 'Rattfratz',weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 10, name: 'Raupy',    weight: 10, rarity: 'common',   encounterType: 'quiz' },
  ],
}
