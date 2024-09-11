/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "var(--red)",
        "green": "var(--green)",
        "rose1": "var(--rose1)",
        "rose2": "var(--rose2)",
        "rose3": "var(--rose3)",
        "rose4": "var(--rose4)",
        "rose5": "var(--rose5)",
        "rose6": "var(--rose6)"
      },
      fontFamily: {
        redHat: ['Red Hat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}