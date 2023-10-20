<script lang="ts">
  // Imports
  import { onMount } from 'svelte'

  import Article from '$lib/ui/Article/Article.svelte'
  import ArrowLeftIcon from '$lib/ui/Icons/ArrowLeft.svelte'
  import ArrowRightIcon from '$lib/ui/Icons/ArrowRight.svelte'
  import { ButtonPrimary } from '$lib/ui/Button'

  import { fetchAllPokemon } from '$lib/services/pokemon'
  import { addToFavorites } from '$lib/services/favorites'
  import { favoritesList } from '$lib/stores/favorites'
  ///- Imports

  // LocalStates
  let pokemonResponse: ReturnType<typeof fetchAllPokemon>
  let lastUrl: string | null | undefined
  ///- LocalStates

  // Props
  export const snapshot = {
    capture: () => lastUrl,
    restore: (value) => {
      lastUrl = value
    },
  }
  ///- Props

  // Methods
  function getAll(url?: string | null) {
    pokemonResponse = fetchAllPokemon(url)
  }
  ///- Methods

  $: (lastUrl || lastUrl === undefined) && getAll(lastUrl)
</script>

{#if pokemonResponse}
  <h1 class="text-2xl font-bold mb-6">All Pokémons</h1>
  {#await pokemonResponse}
    <div>Loading...</div>
  {:then pokemon}
    {#if pokemon}
      {#each pokemon.pokemons as item}
        <Article
          link="/dashboard/pokemon/{item.name}"
          image={item.image}
          name={item.name}
          liked={!!$favoritesList[item.id]}
          onLikeClick={() => addToFavorites(item)}
        />
      {/each}
      <div class="flex justify-between pt-4 pb-12">
        <ButtonPrimary
          disabled={!pokemon?.previous}
          on:click={() => (lastUrl = pokemon?.previous)}
        >
          <ArrowLeftIcon />
          Previous
        </ButtonPrimary>
        <ButtonPrimary
          disabled={!pokemon?.next}
          on:click={() => (lastUrl = pokemon?.next)}
        >
          Next
          <ArrowRightIcon />
        </ButtonPrimary>
      </div>
    {/if}
  {:catch}
    <h1>Oops! Something went wrong</h1>
  {/await}
{/if}
