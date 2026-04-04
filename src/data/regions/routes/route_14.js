import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const Sn = T.SAND, Sp = T.STONE_PATH
const N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_14 = {
  id: 'route_14',
  regionType: 'route',
  name: 'Route 14',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'dungeon_dark_cave',  spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'city_vertania',       spawnX: 9, spawnY: 1 },
    east:  { targetRegion: 'route_13',            spawnX: 1, spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,Sn,Sn,_,_,Sp,Sp,Sp,P,P,P,P,Sp,Sp,Sp,_,_,Sn,Sn,X],
    [X,Sn,_,_,Sp,Sp,_,_,_,_,_,_,_,_,Sp,Sp,_,_,Sn,X],
    [X,_,_,G,G,Sp,_,_,X,_,_,X,_,_,Sp,G,G,_,_,X],
    [X,_,G,G,_,Sp,_,X,_,_,_,_,X,_,Sp,_,G,G,_,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,G,G,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,Sn,_,G,_,_,Sp,_,G,G,G,G,_,Sp,_,_,G,_,Sn,X],
    [X,_,_,G,G,_,Sp,Sp,_,_,_,_,Sp,Sp,_,G,G,Sp,E,E],
    [X,Sn,_,G,_,_,Sp,_,G,G,G,G,_,Sp,_,_,G,_,Sn,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,G,G,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,_,G,G,_,Sp,_,_,W,W,W,W,_,_,Sp,_,G,G,_,X],
    [X,_,_,G,G,Sp,_,W,W,W,W,W,W,_,Sp,G,G,_,_,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,_,_,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,Sn,Sn,_,_,Sp,Sp,Sp,P,P,P,P,Sp,Sp,Sp,_,_,Sn,Sn,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 112, name: 'Rizeros',  weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 34,  name: 'Nidoking', weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 28,  name: 'Sandamer', weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 75,  name: 'Georok',   weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 95,  name: 'Onix',     weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 76,  name: 'Geowaz',   weight: 10, rarity: 'rare',     encounterType: 'quiz' },
  ],
}
