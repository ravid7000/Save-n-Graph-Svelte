<script lang="ts">
  // Imports
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { fetchPokemonDetails } from '$lib/services/pokemon'

  import Details from './components/Details.svelte'
  ///- Imports

  // LocalStates
  let pokemonResponse: ReturnType<typeof fetchPokemonDetails>
  ///- LocalStates

  onMount(() => {
    pokemonResponse = fetchPokemonDetails($page.params.name)
  })
</script>

{#await pokemonResponse}
  <div>Loading...</div>
{:then pokemon}
  <Details {pokemon} />
{/await}
