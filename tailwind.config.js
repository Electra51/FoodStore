/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        TextColor: '#f88e1a',
        WhiteText: "white"

      }
    },
  },
  plugins: [require("daisyui")],
}
