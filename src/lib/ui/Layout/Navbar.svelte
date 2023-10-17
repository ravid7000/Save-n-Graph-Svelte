<script lang="ts">
  // Imports
  import Logo from './Logo.svelte'
  import { ButtonPrimary, Button } from '../Button'
  ///- Imports
</script>

<header>
  <nav class="p-4">
    <div class="container mx-auto">
      <div class="flex items-center">
        <div class="logo text-primary">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div class="ml-auto flex gap-2">
          <Button href="/signup">Sign Up</Button>
          <ButtonPrimary href="/login">Login</ButtonPrimary>
        </div>
      </div>
    </div>
  </nav>
</header>
