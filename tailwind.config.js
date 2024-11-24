/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        geistmono: ['geistmono', 'sans-serif'],
      },
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
        },
        blue: {
          1: '#0E78F9'
        },
      },
    },
  },
  plugins: [],
};
