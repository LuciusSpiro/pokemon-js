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
const Wg = T.GATE_W

export const REGION_4 = {
  id: 4,
  name: 'Prismania City',
  gymId: 4,
  type: 'grass',
  spawnX: 9,
  spawnY: 7,
  gates: {
    south: { targetRegion: 3, spawnX: 9, spawnY: 1 },
    west:  { targetRegion: 2, spawnX: 18, spawnY: 7 },
    east:  { targetRegion: 6, spawnX: 1, spawnY: 7 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,G,G,G,X,F,G,G,_,P,P,_,G,G,F,X,G,G,G,X],
    [X,G,F,G,X,G,G,_,_,P,P,_,_,G,G,X,G,F,G,X],
    [X,G,G,G,_,_,_,_,B,B,B,B,_,_,_,_,G,G,G,X],
    [X,X,_,_,_,F,_,_,B,B,B,B,_,_,F,_,_,X,X,X],
    [X,G,G,_,_,_,_,_,B,D,D,B,_,_,_,_,G,G,G,X],
    [X,G,G,_,_,P,P,P,P,P,P,P,P,P,P,_,_,G,G,X],
    [Wg,Wg,_,_,_,P,_,F,_,S,_,F,_,P,_,_,_,_,_,E],
    [X,G,G,_,_,P,_,G,G,_,_,G,G,P,_,_,G,G,_,E],
    [X,G,G,F,_,P,_,G,G,G,G,G,G,P,_,F,G,G,_,X],
    [X,X,G,G,_,P,_,_,G,G,G,G,_,P,_,G,G,X,X,X],
    [X,G,G,G,_,P,P,_,_,_,_,_,P,P,_,G,G,G,G,X],
    [X,G,F,G,_,_,P,P,P,P,P,P,P,_,_,G,F,G,G,X],
    [X,G,G,G,X,_,_,_,P,P,P,P,_,_,X,G,G,G,G,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 43,  name: 'Myrapla',     weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 69,  name: 'Knofensa',    weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 46,  name: 'Paras',       weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 48,  name: 'Bluzuk',      weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 44,  name: 'Duflor',      weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 70,  name: 'Ultrigaria',  weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 47,  name: 'Parasek',     weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 114, name: 'Tangela',     weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 102, name: 'Owei',        weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 1,   name: 'Bisasam',     weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 45,  name: 'Giflor',      weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 71,  name: 'Sarzenia',    weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 49,  name: 'Omot',        weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 103, name: 'Kokowei',     weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 3,   name: 'Bisaflor',    weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 123, name: 'Sichlor',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 127, name: 'Pinsir',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 115, name: 'Kangama',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 128, name: 'Tauros',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
