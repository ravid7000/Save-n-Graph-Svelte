import { parsePokemonStatsToBarChart } from '$lib/utils/pokemonStats'
import {
  ENDPOINTS,
  POKEMON_IMAGE_URL,
  EXTRACT_ID_REGEX,
} from '$lib/constants/pokemon'

export const fetchAllPokemon = async (
  url: string | null = ENDPOINTS.pokemon
) => {
  try {
    if (!url) {
      throw Error('url is required')
    }

    const response: Pokemon.Pokemons = await fetch(url).then((res) =>
      res.json()
    )

    return {
      ...response,
      pokemons: response.results.map(({ name, url }) => {
        const matched = url.match(EXTRACT_ID_REGEX)
        const id = matched?.length ? matched[1] : ''
        return { name, id, image: POKEMON_IMAGE_URL(id) }
      }),
    }
  } catch (err) {
    // TODO: Handle error
    return null
  }
}

export const fetchPokemonDetails = async (id: string) => {
  try {
    const response: Pokemon.PokemonDetail = await fetch(
      ENDPOINTS.pokemonDetail(id)
    ).then((res) => res.json())

    return {
      ...response,
      image: POKEMON_IMAGE_URL(response.id.toString()),
      statsChart: parsePokemonStatsToBarChart(response.stats),
    }
  } catch (err) {
    return null
  }
}
