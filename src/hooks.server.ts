import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from '$env/static/public'

export const handle = async ({ event, resolve }) => {
  // Initialize Supabase server client
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  })

  // Helper function to get active session from Supabase
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()

    return session
  }

  return resolve(event)
}
