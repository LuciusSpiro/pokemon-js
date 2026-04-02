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
const Wg = T.GATE_W

export const REGION_7 = {
  id: 7,
  name: 'Zinnoberinsel',
  gymId: 7,
  type: 'fire',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 8, spawnX: 9, spawnY: 13 },
    west:  { targetRegion: 5, spawnX: 18, spawnY: 7 },
  },
  tiles: [
    [B,B,B,B,P,P,P,P,N,N,N,N,P,P,P,P,B,B,B,B],
    [B,P,P,P,P,_,_,P,P,P,P,P,P,_,_,P,P,P,P,B],
    [B,P,_,_,_,_,_,_,P,_,_,P,_,_,_,_,_,_,P,B],
    [P,P,_,B,B,_,_,_,P,_,_,P,_,_,_,B,B,_,P,P],
    [P,_,_,B,B,_,_,_,P,_,_,P,_,_,_,B,B,_,_,P],
    [P,_,_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_,_,P],
    [P,_,_,_,B,B,P,_,_,_,_,_,_,P,B,B,_,_,_,P],
    [Wg,Wg,_,_,B,D,P,_,S,_,_,_,_,P,D,B,_,_,P,P],
    [P,_,_,_,B,B,P,_,_,_,G,_,_,P,B,B,_,_,_,P],
    [P,_,_,_,_,_,P,P,P,P,P,P,P,P,_,_,_,_,_,P],
    [P,_,_,B,B,_,_,_,P,_,_,P,_,_,_,B,B,_,_,P],
    [P,P,_,B,B,_,_,_,P,_,_,P,_,_,_,B,B,_,P,P],
    [B,P,_,_,_,_,_,_,P,_,_,P,_,_,_,_,_,_,P,B],
    [B,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,P,B],
    [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B],
  ],
  pokemon: [
    { id: 58,  name: 'Fukano',      weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 77,  name: 'Ponita',      weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 37,  name: 'Vulpix',      weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 16,  name: 'Taubsi',      weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 59,  name: 'Arkani',      weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 78,  name: 'Gallopa',     weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 126, name: 'Magmar',      weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 5,   name: 'Glutexo',     weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 136, name: 'Flamara',     weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 84,  name: 'Dodu',        weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 6,   name: 'Glurak',      weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 38,  name: 'Vulnona',     weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 105, name: 'Knogga',      weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 57,  name: 'Rasaff',      weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 146, name: 'Lavados',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 148, name: 'Dragonir',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 149, name: 'Dragoran',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 139, name: 'Amoroso',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 141, name: 'Kabutops',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
