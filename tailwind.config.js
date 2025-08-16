/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#eef6ff",100:"#d9eaff",500:"#2563eb",600:"#1d4ed8",900:"#0b1220" }
      }
    }
  },
  plugins: []
};
