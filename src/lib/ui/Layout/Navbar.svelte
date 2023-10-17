<script lang="ts">
  // Imports
  import Logo from './Logo.svelte'
  import { ButtonPrimary, Button } from '../Button'
  ///- Imports
</script>

<header>
  <nav class="px-4 py-2">
    <div class="flex items-center">
      <div class="logo text-primary">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div class="ml-auto">
        <Button href="/signup">Sign Up</Button>
        <ButtonPrimary href="/login">Login</ButtonPrimary>
      </div>
    </div>
  </nav>
</header>

<style>
  nav {
    border-bottom: 1px solid var(--cod-gray-100);
  }
</style>
