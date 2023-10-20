<script lang="ts">
  // Imports
  import { page } from '$app/stores'
  import Sidebar from '$lib/ui/Sidebar/Sidebar.svelte'
  ///- Imports
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
