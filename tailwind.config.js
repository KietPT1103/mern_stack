/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D7C66",
        green: {
          dark: "#41B3A2",
          light: "#BDE8CA",
        },
        second: "#D7C3F1"
      },
      fontFamily:{
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"]
      }
    },
  },
  plugins: [],
}

