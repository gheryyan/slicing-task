/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Menambahkan warna sesuai desain Figma
        'furni-teal': '#2D5356', 
      },
    },
  },
  plugins: [],
}