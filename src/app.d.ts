// See https://kit.svelte.dev/docs/types#app

import type { BarChartOptions } from '@carbon/charts-svelte'
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

  namespace Pokemon {
    export interface Pokemons {
      count: number
      next: string | null
      previous: string | null
      results: {
        id: string
        name: string
        url: string
        image: string
      }[]
    }

    export interface PokemonDetail {
      abilities: Ability[]
      base_experience: number
      forms: Species[]
      game_indices: GameIndex[]
      height: number
      held_items: string[]
      id: number
      is_default: boolean
      location_area_encounters: string
      moves: Move[]
      name: string
      order: number
      past_abilities: string[]
      past_types: string[]
      species: Species
      sprites: Sprites
      stats: Stat[]
      types: Type[]
      weight: number
      image: string
      statsChart: PokemonStatsChart
    }

    export interface Ability {
      ability: Species
      is_hidden: boolean
      slot: number
    }

    export interface Species {
      name: string
      url: string
    }

    export interface GameIndex {
      game_index: number
      version: Species
    }

    export interface Move {
      move: Species
      version_group_details: VersionGroupDetail[]
    }

    export interface VersionGroupDetail {
      level_learned_at: number
      move_learn_method: Species
      version_group: Species
    }

    export interface GenerationV {
      'black-white': Sprites
    }

    export interface GenerationIv {
      'diamond-pearl': Sprites
      'heartgold-soulsilver': Sprites
      platinum: Sprites
    }

    export interface Versions {
      'generation-i': GenerationI
      'generation-ii': GenerationIi
      'generation-iii': GenerationIii
      'generation-iv': GenerationIv
      'generation-v': GenerationV
      'generation-vi': { [key: string]: Home }
      'generation-vii': GenerationVii
      'generation-viii': GenerationViii
    }

    export interface Sprites {
      back_default: string
      back_female: null
      back_shiny: string
      back_shiny_female: null
      front_default: string
      front_female: null
      front_shiny: string
      front_shiny_female: null
      other?: Other
      versions?: Versions
      animated?: Sprites
    }

    export interface GenerationI {
      'red-blue': RedBlue
      yellow: RedBlue
    }

    export interface RedBlue {
      back_default: string
      back_gray: string
      back_transparent: string
      front_default: string
      front_gray: string
      front_transparent: string
    }

    export interface GenerationIi {
      crystal: Crystal
      gold: Gold
      silver: Gold
    }

    export interface Crystal {
      back_default: string
      back_shiny: string
      back_shiny_transparent: string
      back_transparent: string
      front_default: string
      front_shiny: string
      front_shiny_transparent: string
      front_transparent: string
    }

    export interface Gold {
      back_default: string
      back_shiny: string
      front_default: string
      front_shiny: string
      front_transparent?: string
    }

    export interface GenerationIii {
      emerald: OfficialArtwork
      'firered-leafgreen': Gold
      'ruby-sapphire': Gold
    }

    export interface OfficialArtwork {
      front_default: string
      front_shiny: string
    }

    export interface Home {
      front_default: string
      front_female: null
      front_shiny: string
      front_shiny_female: null
    }

    export interface GenerationVii {
      icons: DreamWorld
      'ultra-sun-ultra-moon': Home
    }

    export interface DreamWorld {
      front_default: string
      front_female: null
    }

    export interface GenerationViii {
      icons: DreamWorld
    }

    export interface Other {
      dream_world: DreamWorld
      home: Home
      'official-artwork': OfficialArtwork
    }

    export interface Stat {
      base_stat: number
      effort: number
      stat: Species
    }

    export interface Type {
      slot: number
      type: Species
    }

    export interface PokemonStatsChart {
      data: {
        group: string
        value: number
      }[]
      options: BarChartOptions
    }
  }
}

export {}
