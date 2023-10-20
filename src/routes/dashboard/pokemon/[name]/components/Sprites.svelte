<script lang="ts">
  // Props
  export let sprites: Pokemon.Sprites | undefined = undefined
  ///- Props
</script>

{#if sprites}
  <h3 class="text-sm font-bold">Front</h3>
  <div class="flex gap-3 flex-wrap mb-4">
    {#if sprites.front_default}
      <img src={sprites.front_default} alt="pokemon sprite" />
    {/if}

    {#if sprites.front_female}
      <img src={sprites.front_female} alt="pokemon sprite" />
    {/if}

    {#if sprites.front_shiny}
      <img src={sprites.front_shiny} alt="pokemon sprite" />
    {/if}

    {#if sprites.front_shiny_female}
      <img src={sprites.front_shiny_female} alt="pokemon sprite" />
    {/if}
  </div>

  <h3 class="text-sm font-bold">Back</h3>
  <div class="flex gap-3 flex-wrap">
    {#if sprites.back_default}
      <img src={sprites.back_default} alt="pokemon sprite" />
    {/if}
    {#if sprites.back_female}
      <img src={sprites.back_female} alt="pokemon sprite" />
    {/if}
    {#if sprites.back_shiny}
      <img src={sprites.back_shiny} alt="pokemon sprite" />
    {/if}
    {#if sprites.back_shiny_female}
      <img src={sprites.back_shiny_female} alt="pokemon sprite" />
    {/if}
  </div>
{/if}

<style>
  img {
    width: 80px;
  }
</style>
