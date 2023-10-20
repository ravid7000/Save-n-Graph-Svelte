<script lang="ts">
  // Imports
  import Spinner from '../Spinner/Spinner.svelte'
  ///- Imports

  interface $$Props extends Partial<HTMLButtonElement> {
    href?: HTMLAnchorElement['href']
    fullWidth?: boolean
    loading?: boolean
  }

  // Props
  export let href: HTMLAnchorElement['href'] = ''
  export let fullWidth = false
  export let loading = false
  ///- Props
</script>

{#if href}
  <a
    {...$$restProps}
    {href}
    class="base"
    class:loading
    class:w-full={fullWidth}
    on:click
  >
    {#if loading}
      <Spinner />
    {/if}
    <slot />
  </a>
{:else}
  <button
    {...$$restProps}
    class="base"
    class:loading
    class:w-full={fullWidth}
    on:click
  >
    {#if loading}
      <Spinner />
    {/if}
    <slot />
  </button>
{/if}

<style>
  .base {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.9rem;
    height: var(--height, 2.2rem);
    padding: var(--py, 0.2rem) var(--px, 1.2rem);
    background: var(--bg, transparent);
    color: var(--text);
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    gap: 0.25rem;
    user-select: none;
  }

  .base:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .base:hover {
    background: var(--hover-bg, transparent);
  }

  .base:focus {
    background: var(--focus-bg, transparent);
  }

  .base.loading {
    pointer-events: none;
  }
</style>
