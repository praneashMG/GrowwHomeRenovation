/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332',
        accent: '#D4A373',
        secondary: '#111111',
        offWhite: '#F8F9FA'
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

