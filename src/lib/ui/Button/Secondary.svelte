<script lang="ts">
  // Imports
  import type { ComponentProps } from 'svelte'
  import Base from './Base.svelte'
  ///- Imports

  interface $$Props extends ComponentProps<Base> {}

  let styles = {
    background: 'var(--secondary)',
    color: 'var(--contessa-50)',
    hoverBg: 'var(--cod-gray-900)',
    focusBg: 'var(--secondary)',
  }
</script>

<span
  class="contents"
  style="--bg: {styles.background}; --text: {styles.color}; --hover-bg: {styles.hoverBg}; --focus-bg: {styles.focusBg};"
>
  <Base {...$$restProps}>
    <slot />
  </Base>
</span>
