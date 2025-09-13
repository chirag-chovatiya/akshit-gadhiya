/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0b1040', // you can name it anything you like
        'custom-green': '#49A947',
        'custom-light-blue': '#E0E7FF',
      },
      fontFamily: {
        title: ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [
  require('@tailwindcss/typography'),
],
}
