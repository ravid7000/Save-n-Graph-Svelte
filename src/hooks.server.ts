import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from '$env/static/public'
import { redirect } from '@sveltejs/kit'

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

  const session = await event.locals.getSession()

  // Handle protected routes e.g /dashboard
  if (event.url.pathname.startsWith('/dashboard') && !session) {
    throw redirect(303, '/')
  }

  // If user is already logged in, redirect to dashboard
  if (session && ['/login', '/signup', '/'].includes(event.url.pathname)) {
    throw redirect(303, '/dashboard')
  }

  return resolve(event)
}
