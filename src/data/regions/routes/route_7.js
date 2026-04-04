import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_7 = {
  id: 'route_7',
  regionType: 'route',
  name: 'Route 7',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'city_orania',        spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'dungeon_lost_woods',  spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,X,G,G,X,X,X,P,P,P,P,P,P,X,X,X,G,G,X,X],
    [X,G,G,X,X,G,_,P,_,X,X,_,P,_,G,X,X,G,G,X],
    [X,X,G,X,G,G,_,P,_,X,X,_,P,_,G,G,X,G,X,X],
    [X,G,_,_,G,G,P,P,_,_,_,_,P,P,G,G,_,_,G,X],
    [X,X,G,_,G,_,P,_,_,X,X,_,_,P,_,G,_,G,X,X],
    [X,G,G,_,_,P,P,_,X,X,X,X,_,P,P,_,_,G,G,X],
    [X,X,_,_,P,P,_,_,X,_,_,X,_,_,P,P,_,_,X,X],
    [X,G,G,_,_,P,P,_,_,_,_,_,_,P,P,_,_,G,G,X],
    [X,X,G,_,G,_,P,_,_,X,X,_,_,P,_,G,_,G,X,X],
    [X,G,_,_,G,G,P,P,_,X,X,_,P,P,G,G,_,_,G,X],
    [X,X,G,X,G,G,_,P,_,_,_,_,P,_,G,G,X,G,X,X],
    [X,G,G,X,X,G,_,P,_,X,X,_,P,_,G,X,X,G,G,X],
    [X,X,G,G,X,X,X,P,P,P,P,P,P,X,X,X,G,G,X,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 46, name: 'Paras',   weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 48, name: 'Bluzuk',  weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 23, name: 'Rettan',  weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 43, name: 'Myrapla', weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 69, name: 'Knofensa',weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 47, name: 'Parasek', weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
