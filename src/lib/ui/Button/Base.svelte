<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  interface $$Props extends HTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean
    href?: HTMLAnchorElement['href']
  }

  // Props
  export let href: HTMLAnchorElement['href'] = ''
  export let fullWidth = false
  ///- Props
</script>

{#if href}
  <a {...$$restProps} {href} class="base" class:w-full={fullWidth}>
    <slot />
  </a>
{:else}
  <button {...$$restProps} class="base" class:w-full={fullWidth}>
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
  }

  .base:hover {
    background: var(--hover-bg, transparent);
  }

  .base:focus {
    background: var(--focus-bg, transparent);
  }
</style>
