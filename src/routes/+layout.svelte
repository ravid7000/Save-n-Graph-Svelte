<script lang="ts">
  // Imports
  import { onMount } from 'svelte'
  import { invalidate } from '$app/navigation'
  import '$lib/ui/Styles/tailwind-init.css'

  import Navbar from '$lib/ui/Layout/Navbar.svelte'
  import Footer from '$lib/ui/Layout/Footer.svelte'
  ///- Imports

  // Props
  export let data
  ///- Props

  // Local States
  $: ({ supabase, session } = data)
  ///- Local States

  // Lifecycle
  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        // It will cause to re-run the layout load function as we added the dependency for 'supabase:auth'
        invalidate('supabase:auth')
      }
    })

    return () => subscription.unsubscribe()
  })
  ///- Lifecycle
</script>

<Navbar userName={session?.user.email} />
<main>
  <slot />
</main>
<Footer />
