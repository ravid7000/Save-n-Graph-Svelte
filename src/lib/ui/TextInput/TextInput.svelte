<script lang="ts">
  // Import
  import type { ComponentProps } from 'svelte'
  import Input from './Input.svelte'
  ///- Import

  interface $$Props extends ComponentProps<Input> {
    label?: string
    error?: string
  }

  // Props
  export let label: $$Props['label'] = ''
  export let fullWidth: $$Props['fullWidth'] = false
  export let error: $$Props['error'] = ''
  ///- Props
</script>

<label
  class="inline-block label"
  class:w-full={fullWidth}
  for={$$restProps.name}
>
  <div class="font-bold text-sm mb-1">
    {label}
  </div>
  <Input {...$$restProps} {fullWidth} />

  {#if error}
    <p class="field-error">{error}</p>
  {/if}
</label>

<style>
  .field-error {
    margin-top: 0.2rem;
    color: var(--error);
    font-size: 0.8rem;
  }
</style>
