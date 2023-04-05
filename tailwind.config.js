/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '32rem': '32rem',
      },
      width:{
        '4/5':'80%',
      }
    },
    screens: {
      'xsm':'500px',
      'sm': '740px',
      'md': '868px',
      'lg': '1124px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}