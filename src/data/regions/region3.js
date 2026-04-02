import { T } from './tileTypes'

const _ = T.GRASS
const G = T.TALL_GRASS
const X = T.TREE
const P = T.PATH
const W = T.WATER
const B = T.BUILDING
const F = T.FLOWER
const D = T.GYM_DOOR
const S = T.SIGN
const N = T.GATE_N
const E = T.GATE_E
const Wg = T.GATE_W

export const REGION_3 = {
  id: 3,
  name: 'Orania City',
  gymId: 3,
  type: 'electric',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 4, spawnX: 9, spawnY: 13 },
    east:  { targetRegion: 5, spawnX: 1, spawnY: 7 },
    west:  { targetRegion: 1, spawnX: 18, spawnY: 7 },
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
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
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
