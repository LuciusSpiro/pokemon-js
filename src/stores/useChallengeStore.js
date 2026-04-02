import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useChallengeStore = create(
  persist(
    (set, get) => ({
      completed: {},
      quizScores: {},

      completeChallenge: (challengeId, xpEarned) => {
        const existing = get().completed[challengeId]
        set({
          completed: {
            ...get().completed,
            [challengeId]: {
              completedAt: new Date().toISOString(),
              attempts: (existing?.attempts || 0) + 1,
              xpEarned,
            },
          },
        })
      },

      recordAttempt: (challengeId) => {
        const existing = get().completed[challengeId]
        if (existing) return
        // Track attempts for incomplete challenges
        const completed = get().completed
        set({
          completed: {
            ...completed,
            [challengeId]: {
              ...completed[challengeId],
              attempts: ((completed[challengeId]?.attempts) || 0) + 1,
            },
          },
        })
      },

      saveQuizScore: (quizId, score, total) => {
        set({
          quizScores: {
            ...get().quizScores,
            [quizId]: {
              score,
              total,
              completedAt: new Date().toISOString(),
            },
          },
        })
      },

      isCompleted: (challengeId) =>
        !!get().completed[challengeId]?.completedAt,

      getGymProgress: (gymId) => {
        const completed = get().completed
        const gymChallenges = Object.keys(completed).filter((key) =>
          key.startsWith(`gym${gymId}-`)
        )
        return gymChallenges.filter((key) => completed[key]?.completedAt).length
      },

      reset: () => set({ completed: {}, quizScores: {} }),
    }),
    { name: 'pokemon-academy-challenges' }
  )
)
