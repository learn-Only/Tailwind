/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14B8A6",
        secondary: "#64748b",
        dark: "#0f1721",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
