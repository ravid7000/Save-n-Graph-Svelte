import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ locals: { supabase } }) => {
  try {
    await supabase.auth.signOut()
  } catch {
    // TODO: Handle error
  }
  throw redirect(303, '/')
}
