/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Carattere", "cursive"],
        para: ["Cabin", "sans-serif"],
        heading: ["Bebas Neue", "sans-serif"]
      },
      backgroundColor: {
        gradient: [
          "background: #1D4350;\nbackground: -webkit-linear-gradient(to right, #A43931, #1D4350);\nbackground: linear-gradient(to right, #A43931, #1D4350);"
        ]
      },
      gradientColorStops: {
        "color-1": "#FEAC5E",
        "color-2": "#C779D0",
        "color-3": "#4BC0C8"
      }
    }
  },
  plugins: []
};
