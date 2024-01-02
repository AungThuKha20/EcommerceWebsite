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
          "background: #8360c3;  /* fallback for old browsers */\nbackground: -webkit-linear-gradient(to right, #2ebf91, #8360c3);  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to right, #2ebf91, #8360c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"
        ]
      },
      gradientColorStops: {
        "color-1": "#8360c3",
        "color-2": "#2ebf91"
      }
    }
  },
  plugins: []
};
