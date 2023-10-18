<script lang="ts">
  // Imports
  import type { HTMLAttributes } from 'svelte/elements'
  ///- Imports

  interface $$Props extends Partial<HTMLInputElement> {
    type?: string
    fullWidth?: boolean
  }

  // Props
  export let fullWidth: $$Props['fullWidth'] = false
  ///- Props
</script>

<input
  type="text"
  class:w-full={fullWidth}
  {...$$restProps}
  on:input
  on:blur
  on:focus
/>

<style>
  input {
    height: var(--height, 2.2rem);
    font-size: 0.9rem;
    padding: var(--py, 0.2rem) var(--px, 1.2rem);
    border-radius: 2rem;
    border: 1px solid var(--cod-gray-300);
  }

  input.w-full {
    display: block;
  }
</style>
