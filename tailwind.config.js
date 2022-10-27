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
        'cta-bg': "url('/src/img/cta_bg.webp')",
        'cta-bg2': "url('/src/img/cta_bg2.webp')",
      }
    },
  },
  plugins: [],
};
