const API_BASE = 'https://pokeapi.co/api/v2'
const cache = new Map()

async function fetchWithCache(url) {
  if (cache.has(url)) return cache.get(url)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`PokeAPI error: ${res.status}`)
  const data = await res.json()
  cache.set(url, data)
  return data
}

export async function fetchPokemon(idOrName) {
  const raw = await fetchWithCache(`${API_BASE}/pokemon/${idOrName}`)
  return {
    id: raw.id,
    name: raw.name,
    types: raw.types.map((t) => t.type.name),
    sprite: raw.sprites.front_default,
    spriteBack: raw.sprites.back_default,
    officialArtwork:
      raw.sprites.other?.['official-artwork']?.front_default || raw.sprites.front_default,
    stats: {
      hp: raw.stats.find((s) => s.stat.name === 'hp')?.base_stat || 50,
      attack: raw.stats.find((s) => s.stat.name === 'attack')?.base_stat || 50,
      defense: raw.stats.find((s) => s.stat.name === 'defense')?.base_stat || 50,
      speed: raw.stats.find((s) => s.stat.name === 'speed')?.base_stat || 50,
    },
    height: raw.height,
    weight: raw.weight,
  }
}

export async function fetchPokemonList(ids) {
  return Promise.all(ids.map(fetchPokemon))
}
