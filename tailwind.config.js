/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        brandAmber:{
          dark:"#B55730",//rgb(181,87,48)
          DEFAULT:"#c47d57",//rgb(1196,125,87)
          light:"#d4ac8e",//rgb(212,172,142)
          lighter:"#e4ded5",//rgb(228,222,213)
        }
      },
      fontFamily:{
        fraunces144ptsupersoft:['Fraunces144ptsupersoft','sans-serif'],
        fraunces72ptsupersoft:['Fraunces72ptsupersoft','sans-serif'],
        geomanist:['Geomanist','sans-serif'],

      }
    },
  },
  plugins: [],
}
