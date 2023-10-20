# Pokemon App using Sveltekit

## Project structure

```
src/
└── lib/
├── constants/
│ ├── // Directory for common constants
│ └── pokemon.ts
├── services/
│ ├── // Directory for common services
│ ├── pokemon.ts
│ └── favorites.ts
├── stores/
│ ├── // Directory for global stores
│ └── favorites.ts
├── ui/
│ ├── // Directory for common components
│ ├── Alert
│ ├── Article
│ ├── Button
│ ├── Icons
│ ├── Layout
│ ├── Sidebar
│ ├── Spinner
│ ├── Styles
│ └── TextInput
├── utils/
│ ├── // Directory for common utils
│ ├── pokemonStats.ts
│ └── yupParser.ts
└── routes/
├── dashboard/
│ ├── // Protected route with user session
│ ├── api
│ ├── favorites
│ ├── pokemon
│ ├── +layout.svelte
│ └── +page.svelte
├── login
├── logout
├── signup
├── +layout.svelte
└── +page.svelte
```

## Developing

Installed dependencies with `npm install` (or `pnpm install` or `yarn`):

```bash
npm run dev
```

Create .env file from .env.example or just add these environment variables in order to use supabase database

```
PUBLIC_SUPABASE_URL=""
PUBLIC_SUPABASE_ANON_KEY=""
```

Start a development server

```bash
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
