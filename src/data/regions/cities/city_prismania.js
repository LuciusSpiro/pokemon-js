import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const B = T.BUILDING, F = T.FLOWER, D = T.GYM_DOOR, S = T.SIGN
const N = T.GATE_N, So = T.GATE_S, E = T.GATE_E, Wg = T.GATE_W

export const REGION_PRISMANIA = {
  id: 'city_prismania',
  regionType: 'city',
  name: 'Prismania City',
  gymId: 4,
  type: 'grass',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'route_5', spawnX: 9, spawnY: 13 },
    east:  { targetRegion: 'route_6', spawnX: 1, spawnY: 7, requiredBadge: 'Quellorden' },
    south: { targetRegion: 'route_9', spawnX: 9, spawnY: 1, requiredBadge: 'Farborden' },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
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
