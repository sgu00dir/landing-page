/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./landing/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3B82F6",
        green: "#10B981",
        brandBlue: "#275EB5",
        brandOrange: "#FF9900",
        brandRacingGreen: "#004225",
      },
    },
  },
  plugins: [],
};
