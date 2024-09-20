/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E2A5E',
        'medium-gray': '#6C757D',
        'white': '#FFFFFF',
        'accent-gold': '#FFC107'
      }
    },
  },
  plugins: [],
}