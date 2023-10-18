// See https://kit.svelte.dev/docs/types#app

import type { Session, SupabaseClient } from '@supabase/supabase-js'

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient
      getSession: () => Promise<Session | null>
    }
    // interface PageData {}
    // interface Platform {}

    type FormErrors<Values> = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [K in keyof Values]?: Values[K] extends any[]
        ? Values[K][number] extends object
          ? FormErrors<Values[K][number]>[] | string | string[]
          : string | string[]
        : Values[K] extends object
        ? FormErrors<Values[K]>
        : string
    }
  }
}

export {}
