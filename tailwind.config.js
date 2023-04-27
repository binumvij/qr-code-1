/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens:{
        'sm': '375px'
      },
      fontFamily: {
        Outfit: ["Outfit", " sans-serif"],
       },
       colors: {
        'white': '#FFFFFF',
        'lightgray': '#D6E2F0',
        'grayishblue': '#7B879D',
        'darkblue': '#1F3251',
       },
    },
  },
  plugins: [],
}

