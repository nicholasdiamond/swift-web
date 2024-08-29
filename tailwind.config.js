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
        "stepsCard-background": " #58C3F333",
      },
      boxShadow: {
        "nav-shadow": "0px 4px 4px 0px #00000033",
        "card-shadow": "8px 0px 16px 0px #00000026",
        "stepsCard-shadow": "0px 0px 37.67px 0px #FFFFFF40",
        "privacy-shadow": "17.54px 0px 35.07px 0px #00000026",
      },
      backgroundImage: {
        "footer-texture": "url('assets/stepsBG.png')",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      spacing: {
        53: "212px",
        54: "197px",
        1: "-20px",
        65: "261px",
        66: "245px",
        75: "307px",
        76: "292px",
      },
      screens: {
        "mobile-S": "320px",

        "mobile-M": "375px",

        "mobile-L": "425px",

        tablet: "768px",

        laptop: "1024px",

        "laptop-L": "1440px",
      },
    },
  },
  plugins: [],
};
