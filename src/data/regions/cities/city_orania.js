import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const B = T.BUILDING, F = T.FLOWER, D = T.GYM_DOOR, S = T.SIGN
const N = T.GATE_N, So = T.GATE_S, E = T.GATE_E, Wg = T.GATE_W

export const REGION_ORANIA = {
  id: 'city_orania',
  regionType: 'city',
  name: 'Orania City',
  gymId: 3,
  type: 'electric',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'route_3', spawnX: 9, spawnY: 13 },
    west:  { targetRegion: 'route_6', spawnX: 18, spawnY: 7, requiredBadge: 'Quellorden' },
    south: { targetRegion: 'route_7', spawnX: 9, spawnY: 1, requiredBadge: 'Donnerorden' },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [_,_,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,_,_],
    [_,_,P,B,B,B,_,_,P,_,_,P,_,_,B,B,B,P,_,_],
    [_,_,P,B,B,B,_,_,P,_,_,P,_,_,B,B,B,P,_,_],
    [_,_,P,_,_,_,_,_,P,_,_,P,_,_,_,_,_,P,_,_],
    [_,_,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,_,_],
    [_,_,_,_,P,_,_,B,B,_,_,B,B,_,_,P,_,_,_,_],
    [Wg,Wg,_,_,P,_,_,B,D,S,_,D,B,_,_,P,_,_,_,E],
    [_,_,_,_,P,_,_,B,B,_,_,B,B,_,_,P,_,_,_,E],
    [_,_,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,_,_],
    [_,_,P,_,_,_,G,_,P,_,_,P,_,G,_,_,_,P,_,_],
    [_,_,P,_,F,_,G,_,P,_,_,P,_,G,_,F,_,P,_,_],
    [_,_,P,_,_,_,_,_,P,_,_,P,_,_,_,_,_,P,_,_],
    [_,_,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,_,_],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 100, name: 'Voltobal',    weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 81,  name: 'Magnetilo',   weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 25,  name: 'Pikachu',     weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 19,  name: 'Rattfratz',   weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 101, name: 'Lektrobal',   weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 82,  name: 'Magneton',    weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 125, name: 'Elektek',     weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 50,  name: 'Digda',       weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 51,  name: 'Digdri',      weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 52,  name: 'Mauzi',       weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 135, name: 'Blitza',      weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 26,  name: 'Raichu',      weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 137, name: 'Porygon',     weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 53,  name: 'Snobilikat',  weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 145, name: 'Zapdos',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 133, name: 'Evoli',       weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 106, name: 'Kicklee',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 107, name: 'Nockchan',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 113, name: 'Chaneira',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
