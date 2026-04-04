// Jedes Pokemon hat seine eigene, feste Aufgabe.
// Key = Pokemon-ID, Value = Quiz-Frage oder Code-Challenge
//
// Format Quiz:
// { type: 'quiz', question, answers: [4], correct: index }
//
// Format Code:
// { type: 'code', description, starterCode, tests: [{name, test, failMessage}] }
//
// Die Aufgaben sind thematisch an die Arena/Region angepasst
// und die Schwierigkeit richtet sich nach der Seltenheit:
// common = einfach, uncommon = mittel, rare = schwer, legendary = Code-Challenge

export const POKEMON_CHALLENGES = {}

// Import aller regionalen Challenges
import { REGION_1_CHALLENGES } from './pokemonChallenges/region1'
import { REGION_2_CHALLENGES } from './pokemonChallenges/region2'
import { REGION_3_CHALLENGES } from './pokemonChallenges/region3'
import { REGION_4_CHALLENGES } from './pokemonChallenges/region4'
import { REGION_5_CHALLENGES } from './pokemonChallenges/region5'
import { REGION_6_CHALLENGES } from './pokemonChallenges/region6'
import { REGION_7_CHALLENGES } from './pokemonChallenges/region7'
import { REGION_8_CHALLENGES } from './pokemonChallenges/region8'

Object.assign(
  POKEMON_CHALLENGES,
  REGION_1_CHALLENGES,
  REGION_2_CHALLENGES,
  REGION_3_CHALLENGES,
  REGION_4_CHALLENGES,
  REGION_5_CHALLENGES,
  REGION_6_CHALLENGES,
  REGION_7_CHALLENGES,
  REGION_8_CHALLENGES,
)

// Fallback fuer Pokemon ohne eigene Challenge
export function getChallengeForPokemon(pokemonId) {
  return POKEMON_CHALLENGES[pokemonId] || {
    type: 'quiz',
    question: `Was gibt typeof "hello" zurueck?`,
    answers: ['"string"', '"text"', '"char"', '"word"'],
    correct: 0,
  }
}
