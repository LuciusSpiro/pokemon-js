import { useState, useEffect } from 'react'
import { usePokedexStore } from '../../stores/usePokedexStore'
import { fetchPokemon } from '../../api/pokeClient'
import TypeBadge from '../ui/TypeBadge'

export default function PokedexScreen() {
  const caught = usePokedexStore((s) => s.caught)
  const seen = usePokedexStore((s) => s.seen)
  const isCaught = usePokedexStore((s) => s.isCaught)
  const [pokemonData, setPokemonData] = useState({})
  const [loading, setLoading] = useState(true)

  // Merge caught + seen into one unique sorted list
  const allIds = [...new Set([
    ...caught.map((c) => c.pokemonId),
    ...seen,
  ])].sort((a, b) => a - b)

  useEffect(() => {
    async function loadAll() {
      try {
        const data = await Promise.all(
          allIds.map((id) => fetchPokemon(id))
        )
        const map = {}
        data.forEach((p) => { map[p.id] = p })
        setPokemonData(map)
      } catch (err) {
        console.error('Fehler beim Laden:', err)
      } finally {
        setLoading(false)
      }
    }
    if (allIds.length > 0) {
      loadAll()
    } else {
      setLoading(false)
    }
  }, [caught, seen])

  const caughtCount = caught.length
  const seenCount = allIds.length

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Pokedex</h1>
        <p className="text-gray-400">
          {caughtCount} gefangen / {seenCount} gesehen
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-400 py-12">
          <div className="text-4xl mb-4 animate-bounce">⚡</div>
          Lade Pokedex...
        </div>
      ) : allIds.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <div className="text-6xl mb-4">📱</div>
          <p className="text-lg">Dein Pokedex ist noch leer!</p>
          <p className="text-sm mt-2">
            Erkunde die Welt und loese Challenges, um Pokemon zu entdecken.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allIds.map((id) => {
            const pokemon = pokemonData[id]
            if (!pokemon) return null
            const caught = isCaught(id)

            return (
              <div
                key={id}
                className={`pokemon-card text-center transition-all ${
                  caught ? '' : 'opacity-50 grayscale'
                }`}
              >
                <img
                  src={pokemon.officialArtwork}
                  alt={caught ? pokemon.name : '???'}
                  className={`w-24 h-24 mx-auto mb-2 ${
                    caught ? '' : 'brightness-0 invert-[0.15]'
                  }`}
                  style={caught ? undefined : { filter: 'brightness(0)' }}
                />
                <h3 className="text-sm font-bold capitalize">
                  {caught ? pokemon.name : '???'}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  #{String(pokemon.id).padStart(3, '0')}
                </p>
                {caught ? (
                  <div className="flex justify-center gap-1">
                    {pokemon.types.map((type) => (
                      <TypeBadge key={type} type={type} />
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-gray-600">Gesehen</span>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
