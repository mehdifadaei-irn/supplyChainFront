/** @type {import('tailwindcss').Config} */
module.exports = {
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

      xl: "740px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1000px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
