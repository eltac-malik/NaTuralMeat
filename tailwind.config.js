/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        twitter: "red",
      },
      fontFamily: {
        PirateOne: ["Pirata One", "system-ui"],
        Mukta: ["Mukta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
