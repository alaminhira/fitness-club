/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#679316",

        "secondary": "#92a7dd",

        "accent": "#90ea8f",

        "neutral": "#3C293D",

        "base-100": "#FCFCFD",

        "info": "#267CDF",

        "success": "#31E375",

        "warning": "#BC9C10",

        "error": "#F5326D",
      },
    }, ],
  },
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
}