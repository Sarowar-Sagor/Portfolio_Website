/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',    // or ./pages for older Next.js
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '2a004a',
            darkTheme: '11001f'
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        }
      },
    },
    plugins: [],
  }
  