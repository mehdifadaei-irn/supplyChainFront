/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwindcss-rtl")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "408px",
      // => @media (min-width: 768px) { ... }

      lg: "604px",
      // => @media (min-width: 1024px) { ... }

      xl: "840px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1140px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
