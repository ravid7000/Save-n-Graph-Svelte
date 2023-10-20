import { writable } from 'svelte/store'

export const favoritesList = writable<{
  [x in string]: Pokemon.Pokemons['results'][number]
}>({})

favoritesList.subscribe((list) => {
  console.log('favorite list', list)
})

export const addPokemon = (pokemon: Pokemon.Pokemons['results'][number]) => {
  favoritesList.update((list) => {
    list[pokemon.id] = pokemon
    return {
      ...list,
    }
  })
}

export const addRemoveFavorites = (favorites: Pokemon.Pokemons['results']) => {
  favoritesList.update((list) => {
    favorites.forEach((item) => {
      if (list[item.id]) {
        delete list[item.id]
      } else {
        list[item.id] = item
      }
    })
    return {
      ...list,
    }
  })
}
