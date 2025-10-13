/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0b1040", // you can name it anything you like
        "custom-green": "#49A947",
        "custom-light-blue": "#E0E7FF",
        "custom-orange": "#F57C00",
        "custom-blue-light": "#1a1f5c"
      },
      fontFamily: {
        title: ['"Libre Baskerville"', "serif"],
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        bounceUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "60%": { opacity: 1, transform: "translateY(-10px)" },
          "80%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-in-out forwards",
        slideInLeft: "slideInLeft 1s ease-out forwards",
        zoomIn: "zoomIn 1s ease-out forwards",
        bounceUp: "bounceUp 1s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
