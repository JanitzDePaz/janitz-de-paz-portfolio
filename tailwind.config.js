/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "Inter", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tightest: "-.06em",
      },
    },
  },
  plugins: [],
};
