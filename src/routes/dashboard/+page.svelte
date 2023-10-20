<script lang="ts">
  // Imports
  import Article from '$lib/ui/Article/Article.svelte'
  import ArrowLeftIcon from '$lib/ui/Icons/ArrowLeft.svelte'
  import ArrowRightIcon from '$lib/ui/Icons/ArrowRight.svelte'
  import { ButtonPrimary } from '$lib/ui/Button'
  import { onMount } from 'svelte'
  import { fetchAllPokemon } from '$lib/services/pokemon'
  ///- Imports

  // LocalStates
  let pokemonResponse: ReturnType<typeof fetchAllPokemon>
  ///- LocalStates

  // Methods
  function getAll(url?: string | null) {
    pokemonResponse = fetchAllPokemon(url)
  }
  ///- Methods

  onMount(() => {
    getAll()
  })
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
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{item.id}.png"
          name={item.name}
        />
      {/each}
      <div class="flex justify-between pt-4 pb-12">
        <ButtonPrimary
          disabled={!pokemon?.previous}
          on:click={() => getAll(pokemon?.previous)}
        >
          <ArrowLeftIcon />
          Previous
        </ButtonPrimary>
        <ButtonPrimary
          disabled={!pokemon?.next}
          on:click={() => getAll(pokemon?.next)}
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
