/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '320px',     // Custom breakpoint for mobile
        'tablet': '640px',     // Custom breakpoint for tablet
        'desktop': '1024px',   // Custom breakpoint for desktop
        'wide': '1280px',      // Custom breakpoint for wide screens
      },
    },
  },
  plugins: [],
}