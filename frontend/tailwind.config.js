/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all your template files
  ],
  theme: {
    extend: {
      colors: {
        green: {
          700: '#2F855A',
        },
      },
    },
  },
  plugins: [],
}
