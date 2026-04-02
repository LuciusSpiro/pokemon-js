import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { usePokedexStore } from '../../stores/usePokedexStore'
import { fetchPokemon } from '../../api/pokeClient'
import { STARTERS } from '../../utils/constants'
import TypeBadge from '../ui/TypeBadge'

export default function StarterSelect() {
  const navigate = useNavigate()
  const { name, starterId } = usePlayerStore()
  const setStarter = usePlayerStore((s) => s.setStarter)
  const catchPokemon = usePokedexStore((s) => s.catchPokemon)
  const [starters, setStarters] = useState([])
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  // Redirect if no name or already has starter
  useEffect(() => {
    if (!name) navigate('/', { replace: true })
    if (starterId) navigate('/map', { replace: true })
  }, [name, starterId, navigate])

  useEffect(() => {
    async function loadStarters() {
      try {
        const data = await Promise.all(
          STARTERS.map((s) => fetchPokemon(s.apiName))
        )
        setStarters(
          data.map((pokemon, i) => ({
            ...pokemon,
            germanName: STARTERS[i].name,
          }))
        )
      } catch (err) {
        console.error('Fehler beim Laden der Starter:', err)
      } finally {
        setLoading(false)
      }
    }
    loadStarters()
  }, [])

  function handleConfirm() {
    if (!selected) return
    setStarter(selected.id)
    catchPokemon(selected.id, 0)
    navigate('/map')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">⚡</div>
          <p className="text-gray-400">Lade Pokemon-Daten...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-white text-xl mb-2">
            Willkommen, {name}!
          </h1>
          <p className="text-gray-400 text-lg">
            Waehle dein Starter-Pokemon fuer deine Reise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {starters.map((pokemon) => (
            <button
              key={pokemon.id}
              onClick={() => setSelected(pokemon)}
              className={`pokemon-card text-center transition-all duration-200 cursor-pointer ${
                selected?.id === pokemon.id
                  ? 'border-pokemon-yellow shadow-lg shadow-pokemon-yellow/20 scale-105'
                  : 'hover:scale-102'
              }`}
            >
              <img
                src={pokemon.officialArtwork}
                alt={pokemon.germanName}
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-white mb-1">
                {pokemon.germanName}
              </h3>
              <p className="text-gray-500 text-xs mb-2 capitalize">
                {pokemon.name}
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {pokemon.types.map((type) => (
                  <TypeBadge key={type} type={type} />
                ))}
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <div>HP: {pokemon.stats.hp} | ATK: {pokemon.stats.attack}</div>
                <div>DEF: {pokemon.stats.defense} | SPD: {pokemon.stats.speed}</div>
              </div>
            </button>
          ))}
        </div>

        {selected && (
          <div className="text-center animate-bounce-in">
            <p className="text-pokemon-yellow mb-4 font-pixel text-sm">
              Du waehlst {selected.germanName}?
            </p>
            <button onClick={handleConfirm} className="btn-primary text-lg px-12">
              {selected.germanName}, ich waehle dich!
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
