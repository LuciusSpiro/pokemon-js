import { useState, useEffect } from 'react'
import { fetchPokemon } from '../../api/pokeClient'

const RARITY_COLORS = {
  common: 'text-gray-300',
  uncommon: 'text-green-400',
  rare: 'text-pokemon-yellow',
  legendary: 'text-purple-400',
}

const RARITY_LABELS = {
  common: 'Haeufig',
  uncommon: 'Ungewoehnlich',
  rare: 'Selten',
  legendary: 'Legendaer!',
}

export default function WildPokemonIntro({ pokemon, onReady }) {
  const [spriteUrl, setSpriteUrl] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchPokemon(pokemon.id).then((data) => {
      setSpriteUrl(data.officialArtwork || data.sprite)
    }).catch(() => {})
  }, [pokemon.id])

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(onReady, 2000)
      return () => clearTimeout(timer)
    }
  }, [loaded, onReady])

  return (
    <div className="flex flex-col items-center justify-center h-full" onClick={onReady}>
      {/* Pokemon sprite */}
      <div className="animate-slide-in-right mb-6">
        {spriteUrl ? (
          <img
            src={spriteUrl}
            alt={pokemon.name}
            className="w-32 h-32 sm:w-48 sm:h-48"
            onLoad={() => setLoaded(true)}
            style={{ imageRendering: 'pixelated' }}
          />
        ) : (
          <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gray-700 rounded-full animate-pulse" />
        )}
      </div>

      {/* Text */}
      <div className="text-center animate-bounce-in">
        <p className="text-white text-lg sm:text-xl font-bold mb-2">
          Ein wildes {pokemon.name} erscheint!
        </p>
        <p className={`text-sm font-bold ${RARITY_COLORS[pokemon.rarity]}`}>
          {RARITY_LABELS[pokemon.rarity]}
        </p>
      </div>

      <p className="text-gray-500 text-xs mt-6 animate-pulse">
        Tippe um fortzufahren...
      </p>
    </div>
  )
}
