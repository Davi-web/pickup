/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        cards: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        auto1: "auto 1fr",
      },
    },
  },
  plugins: [],
};
