<script lang="ts">
  // Imports
  import { ButtonPrimary } from '$lib/ui/Button'
  import type { PageData } from './$types'
  ///- Imports

  // Props
  export let data: PageData
  ///- Props
</script>

<section class="px-4 py-56">
  <div class="container mx-auto text-center">
    {#if data.session}
      <h1>You have logged-in successfully, {data.session.user.email}</h1>
    {/if}

    <h1 class="text-6xl font-bold">
      Poké<span class="text-contessa-600">mon</span>
    </h1>

    <p>All the Pokémon data you'll ever need in one place</p>

    <div class="mt-6">
      <ButtonPrimary href="/login">Get Started</ButtonPrimary>
    </div>
  </div>
</section>
