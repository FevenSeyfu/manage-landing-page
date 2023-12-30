/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'primary-bright-red': 'hsl(12, 88%, 59%)',
        'primary-dark-blue': 'hsl(228, 39%, 23%)',
        // neutral
        'neutral-grayish-blue': 'hsl(227, 12%, 61%)',
        'neutral-dark-blue': 'hsl(233, 12%, 13%)',
        'neutral-pale-red': 'hsl(13, 100%, 96%)',
        'neutral-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px',
    },
  },
  plugins: [],
}

