/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#95B494',
        'secondary': '#729385',
        'type': '#404040'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/src/imgs/hero_bg.png')",
      }
    },
  },
  plugins: [],
};
