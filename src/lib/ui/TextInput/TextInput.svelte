<script lang="ts">
  // Import
  import type { ComponentProps } from 'svelte'
  import Input from './Input.svelte'
  ///- Import

  interface $$Props extends ComponentProps<Input> {
    label?: string
  }

  // Props
  export let label: $$Props['label'] = ''
  export let fullWidth: $$Props['fullWidth'] = false
  ///- Props
</script>

<label class="label" class:w-full={fullWidth} for={$$restProps.name}>
  <div class="font-bold text-sm mb-2">
    {label}
  </div>
  <Input {...$$restProps} {fullWidth} />
</label>
