/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      letterSpacing: {
        widestcustom: '.5em',
      },
      colors: {'bluelogo': '#00adb5'}
    },
  },
  plugins: [],
}

