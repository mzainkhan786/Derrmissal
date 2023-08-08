/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],

  theme: {
    extend: {
      backgroundImage: {
        background1: "url('./images/BG.png')",
        background2: "url('./images/BG2.png')",
        background3: "url('./images/IMG2.png')",
        background4: "url('./images/IMG22.png')",
        background5: "url('./images/Ellipse 7.svg')",
      },
      fontFamily: {
        newyork: ["Newyork"],
        nordeco: ["Nordeco"],
        nordecolight: ["Nordeco-light"],
      },
      colors: {},
    },
    plugins: [],
  },
};
