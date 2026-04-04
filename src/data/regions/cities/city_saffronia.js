import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const B = T.BUILDING, F = T.FLOWER, D = T.GYM_DOOR, S = T.SIGN
const N = T.GATE_N, So = T.GATE_S, E = T.GATE_E, Wg = T.GATE_W

export const REGION_SAFFRONIA = {
  id: 'city_saffronia',
  regionType: 'city',
  name: 'Saffronia City',
  gymId: 6,
  type: 'psychic',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'route_9', spawnX: 9, spawnY: 13 },
    east:  { targetRegion: 'route_10', spawnX: 1, spawnY: 7 },
    south: { targetRegion: 'route_12', spawnX: 9, spawnY: 1, requiredBadge: 'Sumpforden' },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,F,_,_,_,F,_,_,_,_,_,_,_,_,F,_,_,_,F,X],
    [X,_,_,F,_,_,_,P,P,P,P,P,P,_,_,_,F,_,_,X],
    [X,_,F,_,_,_,P,P,_,_,_,_,P,P,_,_,_,F,_,X],
    [X,_,_,_,B,B,P,_,_,F,F,_,_,P,B,B,_,_,_,X],
    [X,F,_,_,B,B,P,_,F,_,_,F,_,P,B,B,_,_,F,X],
    [X,_,_,P,P,P,P,_,_,_,_,_,_,P,P,P,P,_,_,X],
    [Wg,Wg,_,P,_,_,_,_,B,D,D,B,_,_,_,_,P,_,_,E],
    [X,_,_,P,_,S,_,_,B,B,B,B,_,_,_,_,P,_,_,E],
    [X,_,_,P,P,P,P,_,_,_,_,_,_,P,P,P,P,_,_,X],
    [X,F,_,_,_,_,P,_,F,_,_,F,_,P,_,_,_,_,F,X],
    [X,_,_,G,_,_,P,P,_,_,_,_,P,P,_,_,G,_,_,X],
    [X,_,G,G,_,_,_,P,P,P,P,P,P,_,_,_,G,G,_,X],
    [X,F,_,_,_,F,_,_,P,P,P,P,_,_,F,_,_,_,F,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 63,  name: 'Abra',        weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 96,  name: 'Traumato',    weight: 20, rarity: 'common',    encounterType: 'quiz' },
    { id: 79,  name: 'Flegmon',     weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 16,  name: 'Taubsi',      weight: 15, rarity: 'common',    encounterType: 'quiz' },
    { id: 64,  name: 'Kadabra',     weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 97,  name: 'Hypno',       weight: 8,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 80,  name: 'Lahmus',      weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 122, name: 'Pantimos',    weight: 7,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 124, name: 'Rossana',     weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 37,  name: 'Vulpix',      weight: 6,  rarity: 'uncommon',  encounterType: 'quiz' },
    { id: 65,  name: 'Simsala',     weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 38,  name: 'Vulnona',     weight: 4,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 143, name: 'Relaxo',      weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 83,  name: 'Porenta',     weight: 3,  rarity: 'rare',      encounterType: 'quiz' },
    { id: 150, name: 'Mewtu',       weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 136, name: 'Flamara',     weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 132, name: 'Ditto',       weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 85,  name: 'Dodri',       weight: 1,  rarity: 'legendary', encounterType: 'code' },
    { id: 128, name: 'Tauros',      weight: 1,  rarity: 'legendary', encounterType: 'code' },
  ],
}
