<script lang="ts">
  // Imports
  import { enhance } from '$app/forms'
  import { ButtonPrimary } from '$lib/ui/Button'
  import { TextInput } from '$lib/ui/TextInput'
  import Alert from '$lib/ui/Alert/Alert.svelte'
  ///- Imports

  // Props
  export let form
  ///- Props

  // Local States
  let isLoading = false

  $: email = (form?.email ?? '') as string
  ///- Local States
</script>

<section class="px-4 py-32">
  <div
    class="max-w-[420px] mx-auto border-[1px] border-white-200 rounded-2xl px-8 py-12"
  >
    <h1 class="text-4xl font-bold mb-8 text-center">Login</h1>

    {#if form?.message}
      <Alert type="error" class="mb-4">{form.message}</Alert>
    {/if}

    <form
      method="post"
      class="grid gap-6"
      use:enhance={() => {
        isLoading = true
        form = null
        return async ({ update }) => {
          isLoading = false
          update()
        }
      }}
    >
      <TextInput
        type="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
        value={email}
        fullWidth
      />
      <TextInput
        type="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        fullWidth
      />
      <div>
        <ButtonPrimary type="submit" fullWidth loading={isLoading}>
          Login
        </ButtonPrimary>
      </div>
    </form>
  </div>
</section>
