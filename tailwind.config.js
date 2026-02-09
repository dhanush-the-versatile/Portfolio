/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.php",
    "./app/**/*.php",
    "./public/assets/js/**/*.js"
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316", // orange-500
          amber: "#f59e0b",  // amber-500
          dark: "#020617",   // slate-950
          surface: "#0f172a" // slate-900
        }
      },

      backgroundImage: {
        "gradient-orange": "linear-gradient(to right, #f97316, #f59e0b)"
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"]
      },

      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.25)",
        glow: "0 0 0 0 rgba(249,115,22,0.4)"
      }
    }
  },

  plugins: []
};
