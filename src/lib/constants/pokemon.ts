export const POKEMON_API_URL = 'https://pokeapi.co/api/v2'
export const POKEMON_IMAGE_URL = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const ENDPOINTS = {
  pokemon: `${POKEMON_API_URL}/pokemon`,
  pokemonDetail: (id: string) => `${POKEMON_API_URL}/pokemon/${id}`,
}

export const EXTRACT_ID_REGEX = /\/([0-9]+)\//
