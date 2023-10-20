<script lang="ts">
  // Imports
  import { page } from '$app/stores'
  import { fetchFavorites } from '$lib/services/favorites'
  import { addRemoveFavorites } from '$lib/stores/favorites'
  import Sidebar from '$lib/ui/Sidebar/Sidebar.svelte'
  import { onMount } from 'svelte'
  ///- Imports

  onMount(() => {
    fetchFavorites().then((res) => {
      addRemoveFavorites(res)
    })
  })
</script>

<section class="px-4 pb-4">
  <div class="container mx-auto">
    <div class="grid md:grid-cols-3">
      <Sidebar active={$page.url.pathname} />
      <div class="md:col-span-2 md:max-w-lg pt-6">
        <slot />
      </div>
    </div>
  </div>
</section>
