/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white':'#FFFFFF',
      'almost-white': 'hsl(0, 0%, 98%)',
      'medium-gray': 'hsl(0, 0%, 41%)',
      'almost-black':'hsl(0, 0%, 8%)',
    },
  },
  plugins: [],
}

