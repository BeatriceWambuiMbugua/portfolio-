/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        raleway: ["Raleway", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      }, 
      colors:{
        "crayola": "#FF9C1A",
        "red": "#ED250A",
        "cultured": "#F2F5F9",
        "eerie-black": "#1A1A1A"
      }, 
      
    }
    
  },
  
  plugins: [
    require("flowbite/plugin")
  ],
}
