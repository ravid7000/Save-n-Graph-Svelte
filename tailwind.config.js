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
        white: {
          50: '#ffffff',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929',
        },
        primary: 'var(--white-950)',
        secondary: '#060402',
      },
    },
  },
  plugins: [],
}
