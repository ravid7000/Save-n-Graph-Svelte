import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
  // keeping the dependency on the supabase auth session to invalidate if it expires
  depends('supabase:auth')

  // Create Supabase client which can be called on both server and browser when required
  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Pass supabase client to the page in order to subscribe to the auth state
  return { supabase, session }
}
