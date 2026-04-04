export const T = {
  // Original tiles (tilesNeu.png)
  GRASS: 0,
  TALL_GRASS: 1,
  TREE: 2,
  PATH: 3,
  WATER: 4,
  BUILDING: 5,
  GATE_N: 6,
  GATE_E: 7,
  GATE_S: 8,
  GATE_W: 9,
  GYM_DOOR: 10,
  SIGN: 11,
  FLOWER: 12,

  // New tiles (moreTiles.png)
  CAVE_WALL: 13,
  CAVE_FLOOR: 14,
  CAVE_FLOOR_ENC: 15,
  DARK_FLOOR: 16,
  DARK_FLOOR_ENC: 17,
  TELEPORT_TILE: 18,
  FOREST_PATH: 19,
  BARRIER_CUT: 20,
  BARRIER_SURF: 21,
  LEDGE_D: 22,
  ARENA_FLOOR: 23,
  ARENA_WALL: 24,
  PUZZLE_SWITCH: 25,
  PUZZLE_BARRIER: 26,
  LAVA: 27,
  ICE_FLOOR: 28,
  WARP_PAD: 29,
  SAND: 30,
  STONE_PATH: 31,
  GYM_LEADER: 32,
}

export const TILE_META = {
  // Original
  [T.GRASS]:          { walkable: true,  encounter: false },
  [T.TALL_GRASS]:     { walkable: true,  encounter: true  },
  [T.TREE]:           { walkable: false, encounter: false },
  [T.PATH]:           { walkable: true,  encounter: false },
  [T.WATER]:          { walkable: false, encounter: false },
  [T.BUILDING]:       { walkable: false, encounter: false },
  [T.GATE_N]:         { walkable: true,  encounter: false, gate: 'north' },
  [T.GATE_E]:         { walkable: true,  encounter: false, gate: 'east' },
  [T.GATE_S]:         { walkable: true,  encounter: false, gate: 'south' },
  [T.GATE_W]:         { walkable: true,  encounter: false, gate: 'west' },
  [T.GYM_DOOR]:       { walkable: true,  encounter: false, gymDoor: true },
  [T.SIGN]:           { walkable: false, encounter: false },
  [T.FLOWER]:         { walkable: true,  encounter: false },

  // Cave
  [T.CAVE_WALL]:      { walkable: false, encounter: false },
  [T.CAVE_FLOOR]:     { walkable: true,  encounter: false },
  [T.CAVE_FLOOR_ENC]: { walkable: true,  encounter: true  },

  // Dark cave
  [T.DARK_FLOOR]:     { walkable: true,  encounter: false, dark: true },
  [T.DARK_FLOOR_ENC]: { walkable: true,  encounter: true,  dark: true },

  // Lost woods
  [T.TELEPORT_TILE]:  { walkable: true,  encounter: false, teleport: true },
  [T.FOREST_PATH]:    { walkable: true,  encounter: false },

  // Barriers
  [T.BARRIER_CUT]:    { walkable: false, encounter: false, barrier: 'cut',  unlockBadge: 'Donnerorden' },
  [T.BARRIER_SURF]:   { walkable: false, encounter: false, barrier: 'surf', unlockBadge: 'Seelenorden' },

  // Ledge (one-way down)
  [T.LEDGE_D]:        { walkable: true,  encounter: false, ledge: 'south' },

  // Arena interior
  [T.ARENA_FLOOR]:    { walkable: true,  encounter: false },
  [T.ARENA_WALL]:     { walkable: false, encounter: false },
  [T.GYM_LEADER]:     { walkable: true,  encounter: false, gymLeader: true },

  // Puzzles
  [T.PUZZLE_SWITCH]:  { walkable: true,  encounter: false, puzzleSwitch: true },
  [T.PUZZLE_BARRIER]: { walkable: false, encounter: false, puzzleBarrier: true },
  [T.LAVA]:           { walkable: false, encounter: false },
  [T.ICE_FLOOR]:      { walkable: true,  encounter: false, ice: true },
  [T.WARP_PAD]:       { walkable: true,  encounter: false, warpPad: true },

  // Terrain
  [T.SAND]:           { walkable: true,  encounter: false },
  [T.STONE_PATH]:     { walkable: true,  encounter: false },
}
