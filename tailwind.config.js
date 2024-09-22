/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        accent: "#003366", // Navy Blue
        accentDark: "#002244", // Darker Navy
      },
      backgroundImage: {
        lightImg: "url('/images/bg-4.jpg')",
        darkImg: "url('/images/bg-7.jpg')",
      },
    },
  },
  plugins: [],
}
