import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, Sn = T.SAND, Sp = T.STONE_PATH
const N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_11 = {
  id: 'route_11',
  regionType: 'route',
  name: 'Route 11',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'city_fuchsania',      spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'city_zinnoberinsel',   spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,_,_,G,G,_,_,Sn,P,P,P,P,Sn,_,_,G,G,_,_,X],
    [X,_,G,G,_,_,Sn,Sn,P,_,_,P,Sn,Sn,_,_,G,G,_,X],
    [X,Sn,Sn,_,_,Sn,Sn,_,P,_,_,P,_,Sn,Sn,_,_,Sn,Sn,X],
    [X,Sn,Sn,_,_,Sn,_,_,P,P,P,P,_,_,Sn,_,_,Sn,Sn,X],
    [X,_,_,Sn,Sn,_,_,G,G,P,P,G,G,_,_,Sn,Sn,_,_,X],
    [X,_,_,_,Sn,_,G,G,_,P,P,_,G,G,_,Sn,_,_,_,X],
    [X,Sn,_,_,_,_,G,_,_,P,P,_,_,G,_,_,_,_,Sn,X],
    [X,_,_,_,Sn,_,G,G,_,P,P,_,G,G,_,Sn,_,_,_,X],
    [X,_,_,Sn,Sn,_,_,G,G,P,P,G,G,_,_,Sn,Sn,_,_,X],
    [X,Sn,Sn,_,_,Sn,_,_,P,P,P,P,_,_,Sn,_,_,Sn,Sn,X],
    [X,Sn,Sn,_,_,Sn,Sn,_,P,_,_,P,_,Sn,Sn,_,_,Sn,Sn,X],
    [X,_,_,Sn,_,_,Sn,Sn,P,_,_,P,Sn,Sn,_,_,Sn,_,_,X],
    [X,_,_,Sn,Sn,_,_,Sn,P,P,P,P,Sn,_,_,Sn,Sn,_,_,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 58, name: 'Fukano',  weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 77, name: 'Ponita',  weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 37, name: 'Vulpix',  weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 27, name: 'Sandan',  weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 78, name: 'Gallopa', weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
    { id: 59, name: 'Arkani',  weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
