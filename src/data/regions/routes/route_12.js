import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const Sn = T.SAND, Sp = T.STONE_PATH
const N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_12 = {
  id: 'route_12',
  regionType: 'route',
  name: 'Route 12',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'city_saffronia',    spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'dungeon_dark_cave', spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,Sn,Sn,_,_,_,Sp,Sp,Sp,P,P,Sp,Sp,Sp,_,_,_,Sn,Sn,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,_,_,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,_,_,G,G,Sp,_,_,X,X,X,X,_,_,Sp,G,G,_,_,X],
    [X,_,G,G,_,Sp,_,X,X,_,_,X,X,_,Sp,_,G,G,_,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,_,_,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,Sn,_,G,G,_,Sp,_,_,G,G,_,_,Sp,_,G,G,_,Sn,X],
    [X,_,_,G,_,_,Sp,Sp,_,G,G,_,Sp,Sp,_,_,G,_,_,X],
    [X,Sn,_,G,G,_,Sp,_,_,_,_,_,_,Sp,_,G,G,_,Sn,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,X,X,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,_,G,G,_,Sp,_,X,X,X,X,X,X,_,Sp,_,G,G,_,X],
    [X,_,_,G,G,Sp,_,_,X,X,X,X,_,_,Sp,G,G,_,_,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,_,_,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,Sn,Sn,_,_,_,Sp,Sp,Sp,P,P,Sp,Sp,Sp,_,_,_,Sn,Sn,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 74,  name: 'Kleinstein', weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 111, name: 'Rihorn',     weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 95,  name: 'Onix',       weight: 15, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 27,  name: 'Sandan',     weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 75,  name: 'Georok',     weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 50,  name: 'Digda',      weight: 15, rarity: 'common',   encounterType: 'quiz' },
  ],
}
