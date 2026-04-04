import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const B = T.BUILDING, F = T.FLOWER, D = T.GYM_DOOR, S = T.SIGN
const N = T.GATE_N

export const REGION_VERTANIA = {
  id: 'city_vertania',
  regionType: 'city',
  name: 'Vertania City',
  gymId: 8,
  type: 'ground',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'route_14', spawnX: 9, spawnY: 13 },
  },
  tiles: [
    [B,B,B,B,B,B,B,B,N,N,N,N,B,B,B,B,B,B,B,B],
    [B,P,P,P,P,P,_,_,P,P,P,P,_,_,P,P,P,P,P,B],
    [B,P,_,_,_,P,_,_,P,_,_,P,_,_,P,_,_,_,P,B],
    [B,P,_,B,B,P,P,P,P,_,_,P,P,P,P,B,B,_,P,B],
    [B,P,_,B,B,_,_,_,P,_,_,P,_,_,_,B,B,_,P,B],
    [B,P,_,_,_,_,_,B,P,B,B,P,B,_,_,_,_,_,P,B],
    [B,_,_,_,_,_,_,B,P,B,B,P,B,_,_,_,_,_,_,B],
    [B,_,_,_,G,_,_,B,D,S,S,D,B,_,_,G,_,_,_,B],
    [B,_,_,_,_,_,_,B,P,B,B,P,B,_,_,_,_,_,_,B],
    [B,P,_,_,_,_,_,B,P,B,B,P,B,_,_,_,_,_,P,B],
    [B,P,_,_,G,_,_,_,_,P,P,_,_,_,_,G,_,_,P,B],
    [B,P,_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_,P,B],
    [B,P,P,P,P,P,P,_,_,P,P,_,_,P,P,P,P,P,P,B],
    [B,_,_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_,_,B],
    [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
  ],
  pokemon: [
    { id: 27,  name: 'Sandan',      weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 50,  name: 'Digda',       weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 104, name: 'Tragosso',    weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 74,  name: 'Kleinstein',  weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 28,  name: 'Sandamer',    weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 51,  name: 'Digdri',      weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 105, name: 'Knogga',      weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 111, name: 'Rihorn',      weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 75,  name: 'Georok',      weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 76,  name: 'Geowaz',      weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 112, name: 'Rizeros',     weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 95,  name: 'Onix',        weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 34,  name: 'Nidoking',    weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 31,  name: 'Nidoqueen',   weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 150, name: 'Mewtu',       weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 151, name: 'Mew',         weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 143, name: 'Relaxo',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 131, name: 'Lapras',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 149, name: 'Dragoran',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
