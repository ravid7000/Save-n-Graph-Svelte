import { addRemoveFavorites } from '$lib/stores/favorites'

export const fetchFavorites = async () => {
  try {
    const response = await fetch('/dashboard/api/favorites').then((res) =>
      res.json()
    )
    console.log('favorites', response)
    return response
  } catch {
    return []
  }
}

export const addToFavorites = async (data = {}) => {
  try {
    await fetch('/dashboard/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    addRemoveFavorites([data as unknown as Pokemon.Pokemons['results'][number]])
  } catch {
    // TODO: Handle error
  }
}
