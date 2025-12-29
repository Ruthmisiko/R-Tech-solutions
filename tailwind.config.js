export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenDark: "#064E3B",   // Dark green
        greenMain: "#16A34A",   // Main green
        greenLight: "#DCFCE7",  // Light green background
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
