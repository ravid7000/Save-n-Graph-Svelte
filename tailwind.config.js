/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        contessa: {
          50: 'hsl(10, 43%, 97%)',
          100: 'hsl(10, 40%, 94%)',
          200: 'hsl(10, 44%, 89%)',
          300: 'hsl(9, 42%, 82%)',
          400: 'hsl(10, 41%, 71%)',
          500: 'hsl(10, 38%, 56%)',
          600: 'hsl(10, 33%, 51%)',
          700: 'hsl(10, 33%, 42%)',
          800: 'hsl(9, 32%, 35%)',
          900: 'hsl(10, 28%, 31%)',
          950: 'hsl(9, 34%, 15%)',
        },
        primary: 'var(--contessa-500)',
        secondary: '#060402',
      },
    },
  },
  plugins: [],
}
