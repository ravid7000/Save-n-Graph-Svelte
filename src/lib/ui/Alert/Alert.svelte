<script lang="ts">
  // Props
  let className = ''
  export { className as class }
  export let type: 'error' | 'info' | 'success' = 'info'
  ///- Props
</script>

<div
  role="alert"
  class="alert {className}"
  class:error={type === 'error'}
  class:success={type === 'success'}
>
  <slot />
</div>

<style>
  .alert {
    padding: 0.8rem 1rem;
    border: 1px solid var(--cod-gray-100);
    font-size: 0.9rem;
    border-radius: 0.8rem;
  }

  .alert.error {
    color: var(--error);
    border-color: var(--error);
    background: var(--error-background);
  }

  .alert.success {
    color: var(--success);
    border-color: var(--success);
    background: var(--success-background);
  }
</style>
