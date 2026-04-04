import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { calculateLevel, xpForLevel } from '../utils/xpCalculator'

export const usePlayerStore = create(
  persist(
    (set, get) => ({
      name: '',
      starterId: null,
      xp: 0,
      level: 1,
      badges: [],
      currentGym: 1,

      setName: (name) => set({ name }),

      // 🐐 Mighty Bob mode
      isMightyBob: () => get().name.toLowerCase().trim() === 'mighty bob',

      setStarter: (pokemonId) => set({ starterId: pokemonId }),

      gainXP: (amount) => {
        const newXP = get().xp + amount
        const newLevel = calculateLevel(newXP)
        const oldLevel = get().level
        set({ xp: newXP, level: newLevel })
        return newLevel > oldLevel ? newLevel : null
      },

      earnBadge: (badgeId) => {
        const badges = get().badges
        if (badges.includes(badgeId)) return
        set({
          badges: [...badges, badgeId],
          currentGym: Math.min(get().currentGym + 1, 8),
        })
      },

      getXPProgress: () => {
        const { xp, level } = get()
        const currentLevelXP = xpForLevel(level)
        const nextLevelXP = xpForLevel(level + 1)
        const progress = (xp - currentLevelXP) / (nextLevelXP - currentLevelXP)
        return Math.min(Math.max(progress, 0), 1)
      },

      resetProgress: () =>
        set({
          name: '',
          starterId: null,
          xp: 0,
          level: 1,
          badges: [],
          currentGym: 1,
        }),
    }),
    { name: 'pokemon-academy-player' }
  )
)
