<script lang="ts">
  // Imports
  import { ButtonLike } from '$lib/ui/Button'

  import { addToFavorites } from '$lib/services/favorites'
  import { favoritesList } from '$lib/stores/favorites'

  import Sprites from './Sprites.svelte'
  import Types from './Types.svelte'
  import Stats from './Stats.svelte'
  ///- Imports

  // Props
  export let pokemon: Pokemon.PokemonDetail | undefined | null = undefined
  ///- Props

  // LocalState
  let isSaving = false
  ///- LocalState

  // Method
  async function handleLikeClick() {
    if (pokemon) {
      isSaving = true
      await addToFavorites(pokemon)
      isSaving = false
    }
  }
  ///- Method
</script>

{#if pokemon}
  <div class="details">
    <div class="header content">
      <h1>{pokemon.name}</h1>
      <ButtonLike
        liked={!!$favoritesList[pokemon.id]}
        disabled={isSaving}
        on:click={handleLikeClick}
      />
    </div>

    <div class="image content">
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
    <div class="content">
      <Sprites sprites={pokemon.sprites} />
    </div>
    <div class="content">
      <Types types={pokemon.types} />
    </div>
    <div class="content">
      <Stats stats={pokemon.statsChart} />
    </div>
  </div>
{/if}

<style>
  .details {
    border: 1px solid var(--cod-gray-100);
    border-bottom: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    font-weight: 600;
  }

  .content {
    padding: 1rem;
    border-bottom: 1px solid var(--cod-gray-100);
  }

  .image {
    text-align: center;
  }

  .image img {
    display: inline-block;
    height: 250px;
  }
</style>
