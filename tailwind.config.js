/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
  ],
  theme: {
    colors: {
      red: "#8C1515",
      white: "#FFF",
      black: "#000",
    },
    fontFamily: {
      sans: ["SourceSans3", "sans-serif"],
      serif: ["SourceSerif4", "serif"],
    },
  },
  plugins: [],
};
