module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extends: {
      colors: {
        primary: {
          DEFAULT: "#E6EDF3", //text primary
          muted: "#8B949E", //text secondary
          inverted: "#161B22", //text on primary background
        },
        background: {
          DEFAULT: "#0D1117", //app background
          muted: "#161B22", //card background
          inverted: "#FFFFFF", //app background in light mode
        },
        border: {
          DEFAULT: "#30363D", //borders and dividers
          muted: "#21262D", //hovered borders and dividers
          inverted: "#D0D7DE", //borders and dividers in light mode
        },
        accent: {
          DEFAULT: "#00C896",
          orange: "#F7931A",
        },
        positive: "#22c55e",
        negative: "#ef4444",
      },
    },
  },
};
