<script lang="ts">
  // Imports
  import Article from '$lib/ui/Article/Article.svelte'

  import { addToFavorites } from '$lib/services/favorites'
  import { favoritesList } from '$lib/stores/favorites'
  ///- Imports
</script>

<h1 class="text-2xl font-bold mb-6">Favorites</h1>
{#each Object.keys($favoritesList) as item}
  <Article
    link="/dashboard/pokemon/{$favoritesList[item].name}"
    image={$favoritesList[item].image}
    name={$favoritesList[item].name}
    liked={!!$favoritesList[$favoritesList[item].id]}
    onLikeClick={() => addToFavorites($favoritesList[item])}
  />
{:else}
  <p>No favorites</p>
{/each}
