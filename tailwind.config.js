/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'url("../public/assets/images/banner.png")'
      },
      backgroundColor:{
        light_white: 'rgba(255,255,255,0.4)'
      }
    },
  },
  plugins: [],
}
