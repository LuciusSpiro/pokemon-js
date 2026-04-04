import { T } from '../tileTypes'

const _ = T.GRASS, G = T.TALL_GRASS, X = T.TREE, P = T.PATH, W = T.WATER
const F = T.FLOWER, N = T.GATE_N, E = T.GATE_E, So = T.GATE_S, Wg = T.GATE_W

export const ROUTE_8 = {
  id: 'route_8',
  regionType: 'route',
  name: 'Route 8',
  spawnX: 9,
  spawnY: 7,
  gates: {
    north: { targetRegion: 'dungeon_lost_woods', spawnX: 9, spawnY: 13 },
    south: { targetRegion: 'city_fuchsania',     spawnX: 9, spawnY: 1 },
  },
  tiles: [
    [X,X,X,X,X,X,X,X,N,N,N,N,X,X,X,X,X,X,X,X],
    [X,X,X,G,G,X,X,P,P,P,P,P,P,X,X,G,G,X,X,X],
    [X,X,G,G,_,X,_,P,_,_,_,_,P,_,X,_,G,G,X,X],
    [X,G,G,_,_,_,_,P,_,_,_,_,P,_,_,_,_,G,G,X],
    [X,G,_,_,_,_,P,P,_,F,F,_,P,P,_,_,_,_,G,X],
    [X,_,_,F,_,_,P,_,_,_,_,_,_,P,_,_,F,_,_,X],
    [X,_,_,_,_,P,P,_,_,_,_,_,_,P,P,_,_,_,_,X],
    [X,_,G,G,_,P,_,_,F,_,_,F,_,_,P,_,G,G,_,X],
    [X,_,_,_,_,P,P,_,_,_,_,_,_,P,P,_,_,_,_,X],
    [X,_,_,F,_,_,P,_,_,_,_,_,_,P,_,_,F,_,_,X],
    [X,_,_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_,_,X],
    [X,_,G,G,_,_,_,P,_,_,_,_,P,_,_,_,G,G,_,X],
    [X,_,_,G,_,_,_,P,_,F,F,_,P,_,_,_,G,_,_,X],
    [X,_,_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_,_,X],
    [X,X,X,X,X,X,X,X,So,So,So,So,X,X,X,X,X,X,X,X],
  ],
  pokemon: [
    { id: 29, name: 'Nidoran-F', weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 32, name: 'Nidoran-M', weight: 25, rarity: 'common',   encounterType: 'quiz' },
    { id: 88, name: 'Sleima',    weight: 20, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 23, name: 'Rettan',    weight: 15, rarity: 'common',   encounterType: 'quiz' },
    { id: 48, name: 'Bluzuk',    weight: 10, rarity: 'uncommon', encounterType: 'quiz' },
    { id: 89, name: 'Sleimok',   weight: 5,  rarity: 'rare',     encounterType: 'quiz' },
  ],
}
