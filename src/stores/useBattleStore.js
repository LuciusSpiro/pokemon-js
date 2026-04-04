import { create } from 'zustand'
import { getDamage, getMultiplier, getEffectivenessLabel } from '../utils/typeEffectiveness'

const BASE_DAMAGE = 25
const NO_POKEMON_DAMAGE = 15
const LEADER_DAMAGE = 20

export const useBattleStore = create((set, get) => ({
  // Phase: idle|teamSelect|intro|question|selectAttack|playerAttack|opponentAttack|bossRound|victory|defeat
  phase: 'idle',

  // Player
  playerHP: 100,
  playerMaxHP: 100,
  playerTeam: [],           // [{id, name, types, sprite, used: false}]
  selectedAttackPokemon: null,

  // Leader
  leaderName: '',
  leaderPokemon: [],        // [{id, name, types, sprite, hp, maxHp}]
  currentLeaderPokemon: 0,

  // Gym info
  gymId: null,
  badge: '',

  // Questions
  questions: [],
  bossChallenge: null,
  currentQuestion: 0,
  correctCount: 0,
  log: [],
  lastMultiplier: 1,

  // ---- Actions ----

  initBattle: (gymId, leaderName, badge, leaderPokemonData, questions, bossChallenge) =>
    set({
      phase: 'teamSelect',
      gymId,
      leaderName,
      badge,
      leaderPokemon: leaderPokemonData.map((p) => ({
        ...p,
        hp: 100,
        maxHp: 100,
      })),
      currentLeaderPokemon: 0,
      questions,
      bossChallenge,
      currentQuestion: 0,
      correctCount: 0,
      playerHP: 100,
      playerMaxHP: 100,
      playerTeam: [],
      selectedAttackPokemon: null,
      log: [],
      lastMultiplier: 1,
    }),

  setTeam: (team) => {
    const { leaderName } = get()
    set({
      playerTeam: team.map((p) => ({ ...p, used: false })),
      phase: 'intro',
      log: [`Arena-Leiter ${leaderName} fordert dich heraus!`],
    })
  },

  startFight: () => set({ phase: 'question' }),

  selectAttackPokemon: (pokemon) => set({ selectedAttackPokemon: pokemon }),

  answerCorrect: () => {
    const { leaderPokemon, currentLeaderPokemon, selectedAttackPokemon, playerTeam } = get()
    const defender = leaderPokemon[currentLeaderPokemon]

    let damage = NO_POKEMON_DAMAGE
    let multiplier = 1
    let attackLog = 'Richtige Antwort!'

    if (selectedAttackPokemon) {
      multiplier = getMultiplier(selectedAttackPokemon.types, defender.types)
      damage = getDamage(BASE_DAMAGE, selectedAttackPokemon.types, defender.types)
      const effLabel = getEffectivenessLabel(multiplier)

      // Mark pokemon as used
      const updatedTeam = playerTeam.map((p) =>
        p.id === selectedAttackPokemon.id ? { ...p, used: true } : p
      )

      attackLog = `${selectedAttackPokemon.name} greift an! ${effLabel} (-${damage} HP)`
      set({ playerTeam: updatedTeam })
    } else {
      attackLog = `Angriff ohne Pokemon! (-${damage} HP)`
    }

    const newHP = Math.max(defender.hp - damage, 0)
    const updatedLeader = [...leaderPokemon]
    updatedLeader[currentLeaderPokemon] = { ...defender, hp: newHP }

    set({
      phase: 'playerAttack',
      leaderPokemon: updatedLeader,
      correctCount: get().correctCount + 1,
      selectedAttackPokemon: null,
      lastMultiplier: multiplier,
      log: [...get().log, attackLog],
    })

    return newHP <= 0
  },

  answerWrong: () => {
    const { playerHP, leaderName } = get()
    const newHP = Math.max(playerHP - LEADER_DAMAGE, 0)
    set({
      phase: 'opponentAttack',
      playerHP: newHP,
      selectedAttackPokemon: null,
      log: [...get().log, `Falsche Antwort! ${leaderName} greift an! (-${LEADER_DAMAGE} HP)`],
    })
    return newHP <= 0
  },

  nextRound: () => {
    const { leaderPokemon, currentLeaderPokemon, currentQuestion, questions, bossChallenge } = get()
    const currentPoke = leaderPokemon[currentLeaderPokemon]

    // Current leader pokemon defeated?
    if (currentPoke.hp <= 0) {
      const nextPoke = currentLeaderPokemon + 1
      if (nextPoke >= leaderPokemon.length) {
        // All leader pokemon defeated - boss round if available
        if (bossChallenge) {
          set({
            phase: 'bossRound',
            log: [...get().log, 'Finale Runde! Loese die Code-Challenge!'],
          })
          return
        }
        set({ phase: 'victory' })
        return
      }
      set({
        currentLeaderPokemon: nextPoke,
        log: [...get().log, `${leaderPokemon[nextPoke].name} tritt an!`],
      })
    }

    // Next question
    const nextQ = currentQuestion + 1
    if (nextQ >= questions.length) {
      // Out of questions - check if boss round
      if (bossChallenge && leaderPokemon.some((p) => p.hp > 0)) {
        set({
          phase: 'bossRound',
          log: [...get().log, 'Finale Runde! Loese die Code-Challenge!'],
        })
        return
      }
      // If leader still alive but no questions, player wins on points
      set({ phase: 'victory' })
      return
    }

    set({ currentQuestion: nextQ, phase: 'question' })
  },

  bossSolved: () => {
    // Boss challenge solved - defeat all remaining leader pokemon
    const { leaderPokemon } = get()
    const defeated = leaderPokemon.map((p) => ({ ...p, hp: 0 }))
    set({
      leaderPokemon: defeated,
      phase: 'victory',
      log: [...get().log, 'Code-Challenge geloest! Sieg!'],
    })
  },

  bossFailed: () => {
    // Leader heals a bit
    const { leaderPokemon, currentLeaderPokemon } = get()
    const updated = [...leaderPokemon]
    const current = updated[currentLeaderPokemon] || updated[updated.length - 1]
    const idx = updated.indexOf(current)
    updated[idx] = { ...current, hp: Math.min(current.hp + 30, current.maxHp) }
    set({
      leaderPokemon: updated,
      phase: 'bossRound',
      log: [...get().log, 'Nicht ganz... Der Leader heilt sich! Versuche es nochmal.'],
    })
  },

  setPhase: (phase) => set({ phase }),
  addLog: (msg) => set({ log: [...get().log, msg] }),

  reset: () =>
    set({
      phase: 'idle',
      playerHP: 100,
      playerTeam: [],
      selectedAttackPokemon: null,
      leaderName: '',
      leaderPokemon: [],
      currentLeaderPokemon: 0,
      gymId: null,
      badge: '',
      questions: [],
      bossChallenge: null,
      currentQuestion: 0,
      correctCount: 0,
      log: [],
      lastMultiplier: 1,
    }),
}))
