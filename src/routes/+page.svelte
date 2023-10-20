<script lang="ts">
  // Imports
  import { ButtonPrimary } from '$lib/ui/Button'
  ///- Imports

  // Props
  export let data
  ///- Props
</script>

<section class="px-4 py-56">
  <div class="container mx-auto text-center">
    <h1 class="text-6xl font-bold">
      Poké<span class="text-contessa-600">mon</span>
    </h1>

    <p>All the Pokémon data you'll ever need in one place</p>

    <div class="mt-6">
      {#if data.session}
        <ButtonPrimary href="/dashboard">Go to dashboard</ButtonPrimary>
      {:else}
        <ButtonPrimary href="/login">Get Started</ButtonPrimary>
      {/if}
    </div>
  </div>
</section>
