/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smx: "340px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      lgx: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        backgroundpurple: "#e3e3ff",
        blacky: "#1d1d1d",
        shadow: "#dedede",
        textblack: "#333",
        customBlue: "#e3f2ff",
        customPink: "#ffe3fb",
        buttonBlue: "#e3f2ff",
        buttonYellow: "#ffe7a9",
        darkbg: "#1d1d1d",
      },
      boxShadow: {
        buttonshadow: "inset 0 -3px 0 0 #dedede",
        buttonshadow2: "inset 0 -4px 0 0 #dedede",
      },
    },
  },
  plugins: [],
};
