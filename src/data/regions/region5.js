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

export const REGION_5 = {
  id: 5,
  name: 'Fuchsania City',
  gymId: 5,
  type: 'poison',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 6, spawnX: 9, spawnY: 13 },
    east:  { targetRegion: 7, spawnX: 1, spawnY: 7 },
    west:  { targetRegion: 3, spawnX: 18, spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,G,G,W,W,_,_,P,P,P,P,P,P,_,G,G,W,W,G,X],
    [X,G,W,W,G,G,_,P,_,_,_,_,P,_,G,W,W,G,G,X],
    [X,G,G,W,G,G,_,P,_,B,B,_,P,_,G,G,W,G,G,X],
    [X,G,G,_,_,_,_,P,B,B,B,B,P,_,_,_,G,G,G,X],
    [X,W,G,_,_,P,P,P,B,D,D,B,P,P,P,_,_,G,W,X],
    [X,W,W,_,_,P,_,_,_,P,P,_,_,_,P,_,_,W,W,X],
    [Wg,Wg,W,G,_,P,_,S,_,P,P,_,_,_,P,_,G,W,_,E],
    [X,W,W,G,G,P,_,_,_,P,P,_,_,_,P,G,G,W,W,E],
    [X,W,G,G,_,P,P,_,_,P,P,_,_,P,P,_,G,G,W,X],
    [X,G,G,_,_,_,P,P,P,P,P,P,P,P,_,_,_,G,G,X],
    [X,G,G,W,_,_,_,G,G,_,_,G,G,_,_,_,W,G,G,X],
    [X,G,W,W,G,G,_,G,G,G,G,G,G,_,G,G,W,W,G,X],
    [X,G,G,W,W,G,G,_,_,_,_,_,_,G,G,W,W,G,G,X],
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 88,  name: 'Sleima',      weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 109, name: 'Smogon',      weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 23,  name: 'Rettan',      weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 29,  name: 'Nidoran-F',   weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 89,  name: 'Sleimok',     weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 110, name: 'Smogmog',     weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 24,  name: 'Arbok',       weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 30,  name: 'Nidorina',    weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 32,  name: 'Nidoran-M',   weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 33,  name: 'Nidorino',    weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 31,  name: 'Nidoqueen',   weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 34,  name: 'Nidoking',    weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 94,  name: 'Gengar',      weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 93,  name: 'Alpollo',     weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 151, name: 'Mew',         weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 92,  name: 'Nebulak',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 108, name: 'Schlurp',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 122, name: 'Pantimos',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 124, name: 'Rossana',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
