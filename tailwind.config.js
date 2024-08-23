/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-background": " #E0F4FD",
        "arrow-down": "#2C2D48",
        active: "#3BB9F1",
        "swift-span": "#202224",
      },
      boxShadow: {
        "nav-shadow": "0px 0px 2px 0px #0000001A",
        "card-shadow": "8px 0px 16px 0px #00000026",
      },
    },
  },
  plugins: [],
};
