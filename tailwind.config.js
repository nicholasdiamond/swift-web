/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-background": " #E0F4FD",
        "arrow-down": "#2C2D48",
        active: "#3BB9F1",
      },
      boxShadow: {
        "nav-shadow": "0px 0px 2px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
