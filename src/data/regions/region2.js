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
const So = T.GATE_S
const E = T.GATE_E

export const REGION_2 = {
  id: 2,
  name: 'Azuria City',
  gymId: 2,
  type: 'water',
  spawnX: 9,
  spawnY: 1,
  gates: {
    south: { targetRegion: 1, spawnX: 9, spawnY: 1 },
    east:  { targetRegion: 4, spawnX: 1, spawnY: 7 },
  },
  tiles: [
    [X,X,X,W,W,W,W,W,W,W,W,W,W,W,W,W,X,X,X,X],
    [X,_,_,W,W,P,P,P,P,P,P,P,P,P,_,W,W,_,_,X],
    [X,_,_,_,W,P,_,_,W,W,W,W,_,P,_,_,W,_,_,X],
    [X,G,_,_,P,P,_,W,W,W,W,W,W,P,_,_,_,_,G,X],
    [X,G,_,_,P,_,_,W,W,W,W,W,W,_,_,B,B,_,G,X],
    [X,_,_,_,P,_,W,W,W,P,P,W,W,W,_,B,B,_,_,X],
    [X,_,F,_,P,_,W,W,P,P,P,P,W,W,_,B,D,_,_,X],
    [X,_,_,_,P,_,W,P,P,_,_,P,P,W,_,_,P,P,_,E],
    [X,G,_,_,P,_,W,P,_,S,_,_,P,W,_,_,_,P,_,E],
    [X,G,_,_,P,_,W,W,P,P,P,P,W,W,_,F,_,P,_,X],
    [X,_,_,_,P,_,_,W,W,W,W,W,W,_,_,_,_,P,_,X],
    [X,_,F,_,P,P,_,_,W,W,W,W,_,_,G,G,P,P,_,X],
    [X,G,G,_,_,P,P,_,_,W,W,_,_,_,G,G,P,_,G,X],
    [X,G,G,_,_,_,P,P,P,P,P,P,P,P,P,P,P,_,G,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 72,  name: 'Tentacool',   weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 118, name: 'Goldini',     weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 60,  name: 'Quapsel',     weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 129, name: 'Karpador',    weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 54,  name: 'Enton',       weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 120, name: 'Sterndu',     weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 116, name: 'Seeper',      weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 98,  name: 'Krabby',      weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 86,  name: 'Jurob',       weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 90,  name: 'Muschas',     weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 121, name: 'Starmie',     weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 131, name: 'Lapras',      weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 79,  name: 'Flegmon',     weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 147, name: 'Dratini',     weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 7,   name: 'Schiggy',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 130, name: 'Garados',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 134, name: 'Aquana',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 140, name: 'Kabuto',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 144, name: 'Arktos',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
