import { create } from 'zustand'

export const useBattleStore = create((set, get) => ({
  phase: 'idle', // idle | intro | question | playerAttack | opponentAttack | result | catch | victory | defeat
  playerPokemon: null,
  opponentPokemon: null,
  currentQuestion: 0,
  questions: [],
  correctCount: 0,
  log: [],

  startBattle: (playerPokemon, opponentPokemon, questions) =>
    set({
      phase: 'intro',
      playerPokemon: { ...playerPokemon, hp: playerPokemon.maxHp },
      opponentPokemon: { ...opponentPokemon, hp: opponentPokemon.maxHp },
      currentQuestion: 0,
      questions,
      correctCount: 0,
      log: [`Ein wilder ${opponentPokemon.name} erscheint!`],
    }),

  setPhase: (phase) => set({ phase }),

  showQuestion: () => set({ phase: 'question' }),

  answerCorrect: () => {
    const { opponentPokemon, questions, currentQuestion } = get()
    const damage = questions[currentQuestion]?.damage || 25
    const newHP = Math.max(opponentPokemon.hp - damage, 0)
    set({
      phase: 'playerAttack',
      opponentPokemon: { ...opponentPokemon, hp: newHP },
      correctCount: get().correctCount + 1,
      log: [...get().log, 'Richtige Antwort! Dein Angriff trifft!'],
    })
    return newHP <= 0
  },

  answerWrong: () => {
    const { playerPokemon } = get()
    const damage = 20
    const newHP = Math.max(playerPokemon.hp - damage, 0)
    set({
      phase: 'opponentAttack',
      playerPokemon: { ...playerPokemon, hp: newHP },
      log: [...get().log, 'Falsche Antwort! Der Gegner greift an!'],
    })
    return newHP <= 0
  },

  nextQuestion: () => {
    const next = get().currentQuestion + 1
    if (next >= get().questions.length) {
      set({ phase: 'victory' })
      return false
    }
    set({ currentQuestion: next, phase: 'question' })
    return true
  },

  addLog: (message) =>
    set({ log: [...get().log, message] }),

  reset: () =>
    set({
      phase: 'idle',
      playerPokemon: null,
      opponentPokemon: null,
      currentQuestion: 0,
      questions: [],
      correctCount: 0,
      log: [],
    }),
}))
