import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usePokedexStore = create(
  persist(
    (set, get) => ({
      caught: [],
      seen: [],

      catchPokemon: (pokemonId, gymId) => {
        const caught = get().caught
        if (caught.some((p) => p.pokemonId === pokemonId)) return false
        set({
          caught: [
            ...caught,
            { pokemonId, gymId, caughtAt: new Date().toISOString() },
          ],
          seen: [...new Set([...get().seen, pokemonId])],
        })
        return true
      },

      seePokemon: (pokemonId) => {
        const seen = get().seen
        if (seen.includes(pokemonId)) return
        set({ seen: [...seen, pokemonId] })
      },

      isCaught: (pokemonId) =>
        get().caught.some((p) => p.pokemonId === pokemonId),

      getCaughtCount: () => get().caught.length,

      reset: () => set({ caught: [], seen: [] }),
    }),
    { name: 'pokemon-academy-pokedex' }
  )
)
