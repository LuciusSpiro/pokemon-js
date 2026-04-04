import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_6 = {
  id: 'route_6',
  regionType: 'route',
  name: 'Route 6',
  spawnX: 9,
  spawnY: 7,
  gates: {
    west: { targetRegion: 'city_prismania', spawnX: 18, spawnY: 7 },
    east: { targetRegion: 'city_orania',    spawnX: 1,  spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,_,F,_,F,_,F,_,F,_,_,F,_,F,_,F,_,F,_,X],
    [X,F,_,F,_,_,_,_,_,_,_,_,_,_,_,F,_,F,_,X],
    [X,_,_,_,_,G,G,_,_,_,_,_,_,G,G,_,_,_,_,X],
    [X,F,_,_,G,G,G,_,_,F,F,_,_,G,G,G,_,_,F,X],
    [X,_,_,_,G,G,_,_,P,P,P,P,_,_,G,G,_,_,_,X],
    [X,F,_,_,_,_,P,P,P,_,_,P,P,P,_,_,_,_,F,X],
    [Wg,Wg,P,P,P,P,P,_,_,_,_,_,_,P,P,P,P,P,E,E],
    [X,F,_,_,_,_,P,P,P,_,_,P,P,P,_,_,_,_,F,X],
    [X,_,_,_,G,G,_,_,P,P,P,P,_,_,G,G,_,_,_,X],
    [X,F,_,_,G,G,G,_,_,F,F,_,_,G,G,G,_,_,F,X],
    [X,_,_,_,_,G,G,_,_,_,_,_,_,G,G,_,_,_,_,X],
    [X,F,_,F,_,_,_,_,_,_,_,_,_,_,_,F,_,F,_,X],
    [X,_,F,_,F,_,F,_,F,_,_,F,_,F,_,F,_,F,_,X],
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 52, name: 'Mauzi',    weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 56, name: 'Menki',    weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 66, name: 'Machollo', weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 58, name: 'Fukano',   weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 21, name: 'Habitak',  weight: 15, rarity: 'common',   encounterType: 'quiz' },
  ],
}
