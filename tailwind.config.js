/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/TS files in your `src` folder
    './public/index.html',       // Include the root HTML file
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
    },},
  },
  plugins: [],
}

