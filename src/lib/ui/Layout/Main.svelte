<script lang="ts">
  import '$lib/ui/Styles/tailwind-init.css'

  import Navbar from './Navbar.svelte'
  import Footer from './Footer.svelte'
</script>

<Navbar />
<main>
  <slot />
</main>
<Footer />
