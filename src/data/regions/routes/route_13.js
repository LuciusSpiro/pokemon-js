import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const Sn = T.SAND, Sp = T.STONE_PATH
const N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_13 = {
  id: 'route_13',
  regionType: 'route',
  name: 'Route 13',
  spawnX: 9,
  spawnY: 7,
  gates: {
    west: { targetRegion: 'city_zinnoberinsel', spawnX: 18, spawnY: 7 },
    east: { targetRegion: 'route_14',           spawnX: 1,  spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [X,Sn,Sn,Sn,Sn,W,W,W,W,W,W,W,W,W,W,Sn,Sn,Sn,Sn,X],
    [X,Sn,_,_,Sn,Sn,W,W,W,W,W,W,W,W,Sn,Sn,_,_,Sn,X],
    [X,_,_,G,G,Sn,Sn,_,_,Sp,Sp,_,_,Sn,Sn,G,G,_,_,X],
    [X,_,G,G,_,_,Sp,Sp,Sp,Sp,Sp,Sp,Sp,Sp,_,_,G,G,_,X],
    [Wg,Wg,Sp,Sp,Sp,Sp,Sp,_,_,_,_,_,_,Sp,Sp,Sp,Sp,Sp,E,E],
    [X,_,G,G,_,_,Sp,Sp,Sp,Sp,Sp,Sp,Sp,Sp,_,_,G,G,_,X],
    [X,_,_,G,G,Sn,Sn,_,_,Sp,Sp,_,_,Sn,Sn,G,G,_,_,X],
    [X,Sn,_,_,Sn,Sn,W,W,W,W,W,W,W,W,Sn,Sn,_,_,Sn,X],
    [X,Sn,Sn,Sn,Sn,W,W,W,W,W,W,W,W,W,W,Sn,Sn,Sn,Sn,X],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 77,  name: 'Ponita',  weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 126, name: 'Magmar',  weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 58,  name: 'Fukano',  weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 37,  name: 'Vulpix',  weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 78,  name: 'Gallopa', weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 59,  name: 'Arkani',  weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
