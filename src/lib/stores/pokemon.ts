import { writable } from 'svelte/store'

export const pokemonList = writable<Pokemon.Pokemons['results']>([])

export const addPokemons = (pokemons: Pokemon.Pokemons['results']) => {
  pokemonList.update((previous) => [...previous, ...pokemons])
}
