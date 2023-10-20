<script lang="ts">
  // Props
  export let types: Pokemon.Type[] = []
  ///- Props
</script>

<h3 class="text-sm font-bold mb-3">Types</h3>
{#each types as type}
  <span class="px-2 py-1 rounded-sm bg-white-100 text-xs mr-2 capitalize">
    {type.type.name}
  </span>
{/each}
