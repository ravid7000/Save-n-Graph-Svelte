<script lang="ts">
  // Imports
  import type { ComponentProps } from 'svelte'
  import Base from './Base.svelte'
  ///- Imports

  interface $$Props extends ComponentProps<Base> {}

  let styles = {
    background: 'var(--primary)',
    color: 'var(--contessa-50)',
    hoverBg: 'var(--contessa-800)',
    focusBg: 'var(--primary)',
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
