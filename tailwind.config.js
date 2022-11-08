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
      spacing:{
        '10sz':'0.625rem',//10px
        '15sz':'0.9375rem',//15px
        '18sz':'1.125rem',//18px
        '30sz':'1.875rem',//30px
        '60sz':'3.75rem',//60px
      }
      ,
      fontFamily:{
        fraunces144ptsupersoft:['Fraunces144ptsupersoft','sans-serif'],
        fraunces72ptsupersoft:['Fraunces72ptsupersoft','sans-serif'],
        geomanist:['Geomanist','sans-serif'],

      },
      fontSize:{
        '13sz':'0.8125rem',//13px
        '22sz':'1.375rem',//22px
        '25sz':'1.5625rem',//25px
        
        '90sz':'5.625rem',//90px
        '30sz':'1.875rem',//30px
        '37sz':'2.3125rem',//37px
        '39sz':'2.4375',//39px
        '40sz':'2.5rem',//40px
        '61':'3.8125rem',//61px
        '70sz':'4.375rem',//70px
        '80sz':'5rem',//80px
      },
      
      lineHeight:{
        '1.1':'1.1',//99px-90px
      },
      backgroundImage:{
        headerBgImage:"linear-gradient(270deg,#302f39,#223240 95%)",
        btnBgImage:"url('/images/noise10.webp')",
        bgNoise:"url('/images/noise10.webp')",
        heroGradientBg:"linear-gradient(90deg,#302f39,#223240)",
      },
      borderRadius:{
        '10sz':'0.625rem',//10px
      },
      maxHeight:{
        '720sz':'720px'
      },
      minHeight:{
        '720sz':'720px'
      },
      maxWidth:{
        '1200sz':'1200px',
        '1400sz':'1400px'
      }
      ,
      translate:{
        headerBg:"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",   
        noiseBg:""
      },
     
    },
  },
  plugins: [],
}
