<script lang="ts">
  // Imports
  import Logo from './Logo.svelte'
  import { ButtonPrimary, Button } from '../Button'

  import { enhance } from '$app/forms'
  ///- Imports

  // Props
  export let userName = ''
  ///- Props
</script>

<header>
  <nav class="px-4 py-2">
    <div class="flex items-center">
      <div class="logo text-primary">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div class="ml-auto pl-4 flex items-center">
        {#if userName}
          <p class="text-sm">Logged in as <b>{userName}</b></p>
          <form method="post" action="/logout" use:enhance>
            <Button type="submit">Logout</Button>
          </form>
        {:else}
          <Button href="/signup">Sign Up</Button>
          <ButtonPrimary href="/login">Login</ButtonPrimary>
        {/if}
      </div>
    </div>
  </nav>
</header>

<style>
  nav {
    border-bottom: 1px solid var(--cod-gray-100);
  }

  header {
    position: sticky;
    top: 0;
    background: var(--background);
    z-index: 100;
  }
</style>
