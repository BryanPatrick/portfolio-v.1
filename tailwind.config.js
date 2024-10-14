/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "grey-1": "rgb(25, 25, 35)",
        "grey-2": "rgb(32, 32, 42)",
        "grey-3": "rgb(35, 35, 45)",
        "grey-4": "rgb(36, 36, 47)",
        "grey-5": "rgb(44, 44, 55)",
        "grey-6": "rgb(44, 44, 56)",
        "grey-7": "rgb(45, 45, 56)",
      },
    },
  },
  plugins: [],
};
