/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1220px"
      },

      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
     
    

    },
  },
  plugins: [],
}