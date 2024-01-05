/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('./assets/pic4.avif')"

      }
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

