import { useState, useEffect } from 'react'
import { usePokedexStore } from '../../stores/usePokedexStore'
import { fetchPokemon } from '../../api/pokeClient'
import TypeBadge from '../ui/TypeBadge'

export default function TeamSelect({ onConfirm, maxTeamSize = 3 }) {
  const caught = usePokedexStore((s) => s.caught)
  const [pokemonData, setPokemonData] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const data = await Promise.all(
          caught.map((entry) => fetchPokemon(entry.pokemonId))
        )
        setPokemonData(data)
      } catch (err) {
        console.error('Fehler beim Laden:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [caught])

  function togglePokemon(pokemon) {
    if (selected.find((p) => p.id === pokemon.id)) {
      setSelected(selected.filter((p) => p.id !== pokemon.id))
    } else if (selected.length < maxTeamSize) {
      setSelected([...selected, pokemon])
    }
  }

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-12">
        <div className="text-4xl mb-4 animate-bounce">⚡</div>
        Lade Pokemon...
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Waehle dein Team!</h2>
        <p className="text-gray-400 text-sm">
          Waehle bis zu {maxTeamSize} Pokemon als Attacken. Typ-Vorteile geben Bonus-Schaden!
        </p>
        <p className="text-pokemon-yellow text-sm mt-1 font-bold">
          {selected.length}/{maxTeamSize} gewaehlt
        </p>
      </div>

      {/* Pokemon Grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {pokemonData.map((pokemon) => {
            const isSelected = selected.find((p) => p.id === pokemon.id)
            const isFull = selected.length >= maxTeamSize && !isSelected

            return (
              <button
                key={pokemon.id}
                onClick={() => togglePokemon(pokemon)}
                disabled={isFull}
                className={`pokemon-card text-center transition-all p-3 ${
                  isSelected
                    ? 'border-pokemon-yellow shadow-lg shadow-pokemon-yellow/20 scale-105'
                    : isFull
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:scale-102'
                }`}
              >
                <img
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  className="w-16 h-16 mx-auto mb-1"
                  style={{ imageRendering: 'pixelated' }}
                />
                <p className="text-xs font-bold capitalize truncate">{pokemon.name}</p>
                <div className="flex justify-center gap-1 mt-1">
                  {pokemon.types.map((type) => (
                    <TypeBadge key={type} type={type} />
                  ))}
                </div>
                {isSelected && (
                  <div className="mt-1 text-pokemon-yellow text-xs font-bold">✓</div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Confirm Button */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <button
          onClick={() => onConfirm(selected)}
          disabled={selected.length === 0}
          className="btn-primary w-full"
        >
          {selected.length === 0
            ? 'Waehle mindestens 1 Pokemon'
            : `Mit ${selected.length} Pokemon kaempfen!`}
        </button>
        <button
          onClick={() => onConfirm([])}
          className="w-full mt-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          Ohne Pokemon kaempfen (schwerer)
        </button>
      </div>
    </div>
  )
}
