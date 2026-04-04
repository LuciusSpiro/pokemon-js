import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const B = T.BUILDING, F = T.FLOWER, D = T.GYM_DOOR, S = T.SIGN
const So = T.GATE_S, E = T.GATE_E

export const REGION_MARMORIA = {
  id: 'city_marmoria',
  regionType: 'city',
  name: 'Marmoria City',
  gymId: 1,
  type: 'rock',
  spawnX: 9,
  spawnY: 13,
  gates: {
    south: { targetRegion: 'route_1', spawnX: 9, spawnY: 1 },
    east:  { targetRegion: 'route_2', spawnX: 1, spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,G,G,G,_,_,_,P,P,P,P,P,P,_,_,G,G,G,G,X],
    [X,G,G,_,_,_,_,P,_,_,_,_,P,_,_,_,G,G,G,X],
    [X,G,_,_,F,_,_,P,_,_,_,_,P,_,_,F,_,G,G,X],
    [X,_,_,_,_,_,P,P,_,B,B,_,P,P,_,_,_,_,G,X],
    [X,_,_,F,_,_,P,_,B,B,B,B,_,P,_,_,F,_,_,X],
    [X,G,G,_,_,_,P,_,B,D,D,B,_,P,_,_,_,G,_,X],
    [X,G,G,_,_,P,P,_,_,P,P,_,_,P,P,_,_,G,_,E],
    [X,G,_,_,_,P,_,_,_,P,P,_,_,_,P,_,_,_,_,E],
    [X,_,_,_,S,P,_,F,_,P,P,_,F,_,P,_,_,_,_,X],
    [X,_,_,P,P,P,_,_,_,P,P,_,_,_,P,P,P,_,_,X],
    [X,G,G,P,_,_,G,G,_,P,P,_,G,G,_,_,P,G,G,X],
    [X,G,G,P,_,G,G,G,_,P,P,_,G,G,G,_,P,G,G,X],
    [X,_,_,P,P,P,P,P,P,P,P,P,P,P,P,P,P,_,_,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 16,  name: 'Taubsi',     weight: 25, rarity: 'common',    encounterType: 'quiz' },
    { id: 19,  name: 'Rattfratz',   weight: 25, rarity: 'common',    encounterType: 'quiz' },
    { id: 10,  name: 'Raupy',       weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 13,  name: 'Hornliu',     weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 21,  name: 'Habitak',     weight: 10, rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 74,  name: 'Kleinstein',  weight: 12, rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 56,  name: 'Menki',       weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 27,  name: 'Sandan',      weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 50,  name: 'Digda',       weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 66,  name: 'Machollo',    weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 95,  name: 'Onix',        weight: 5,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 35,  name: 'Piepi',       weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 104, name: 'Tragosso',    weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 111, name: 'Rihorn',      weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 1,   name: 'Bisasam',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 4,   name: 'Glumanda',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 25,  name: 'Pikachu',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 142, name: 'Aerodactyl',  weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 138, name: 'Amonitas',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
