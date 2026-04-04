import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, Sn = T.SAND, Sp = T.STONE_PATH
const N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_10 = {
  id: 'route_10',
  regionType: 'route',
  name: 'Route 10',
  spawnX: 9,
  spawnY: 7,
  gates: {
    west: { targetRegion: 'city_saffronia',  spawnX: 18, spawnY: 7 },
    east: { targetRegion: 'city_fuchsania',  spawnX: 1,  spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,Sn,Sn,Sn,X,X,Sn,Sn,Sn,X,X,Sn,Sn,Sn,X,X,Sn,Sn,Sn,X],
    [X,Sn,_,Sn,X,Sn,Sn,_,Sn,Sn,Sn,Sn,_,Sn,Sn,X,Sn,_,Sn,X],
    [X,Sn,_,_,Sn,Sn,G,G,_,_,_,_,G,G,Sn,Sn,_,_,Sn,X],
    [X,_,_,_,G,G,G,Sp,Sp,Sp,Sp,Sp,Sp,G,G,G,_,_,_,X],
    [X,Sn,_,_,G,_,Sp,Sp,_,_,_,_,Sp,Sp,_,G,_,_,Sn,X],
    [X,Sn,_,_,_,Sp,Sp,_,_,G,G,_,_,Sp,Sp,_,_,_,Sn,X],
    [Wg,Wg,Sp,Sp,Sp,Sp,_,_,_,_,_,_,_,_,Sp,Sp,Sp,Sp,E,E],
    [X,Sn,_,_,_,Sp,Sp,_,_,G,G,_,_,Sp,Sp,_,_,_,Sn,X],
    [X,Sn,_,_,G,_,Sp,Sp,_,_,_,_,Sp,Sp,_,G,_,_,Sn,X],
    [X,_,_,_,G,G,G,Sp,Sp,Sp,Sp,Sp,Sp,G,G,G,_,_,_,X],
    [X,Sn,_,_,Sn,Sn,G,G,_,_,_,_,G,G,Sn,Sn,_,_,Sn,X],
    [X,Sn,_,Sn,X,Sn,Sn,_,Sn,Sn,Sn,Sn,_,Sn,Sn,X,Sn,_,Sn,X],
    [X,Sn,Sn,Sn,X,X,Sn,Sn,Sn,X,X,Sn,Sn,Sn,X,X,Sn,Sn,Sn,X],
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 74,  name: 'Kleinstein', weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 27,  name: 'Sandan',     weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 50,  name: 'Digda',      weight: 20, rarity: 'common',   encounterType: 'quiz' },
    { id: 95,  name: 'Onix',       weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 75,  name: 'Georok',     weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 111, name: 'Rihorn',     weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
  ],
}
