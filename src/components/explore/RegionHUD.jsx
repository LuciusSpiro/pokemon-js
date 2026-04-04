import { usePokedexStore } from '../../stores/usePokedexStore'
import { getRegion } from '../../data/regions/index'
import { TYPE_COLORS } from '../../utils/constants'

export default function RegionHUD({ regionId }) {
  const region = getRegion(regionId)
  const caught = usePokedexStore((s) => s.caught)

  if (!region) return null

  const regionPokemon = region.pokemon || []
  const regionPokemonIds = regionPokemon.map((p) => p.id)
  const caughtInRegion = caught.filter((c) => regionPokemonIds.includes(c.pokemonId)).length
  const totalInRegion = regionPokemon.length
  const typeColor = TYPE_COLORS[region.type] || '#888'

  return (
    <div className="absolute top-2 left-2 z-20 flex items-center gap-2">
      <div
        className="px-3 py-1.5 rounded-lg text-white text-xs sm:text-sm font-bold shadow-lg"
        style={{ backgroundColor: typeColor }}
      >
        {region.name}
      </div>
      {totalInRegion > 0 && (
        <div className="bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-300">
          {caughtInRegion}/{totalInRegion}
        </div>
      )}
    </div>
  )
}
