/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'xsm':'479px',
        'mlg':'991px',
      }
      ,
      colors:{
        brandAmber:{
          dark:"#B55730",//rgb(181,87,48)
          DEFAULT:"#c47d57",//rgb(1196,125,87)
          light:"#d4ac8e",//rgb(212,172,142)
          lighter:"#e4ded5",//rgb(228,222,213)
        },
        brandBlack:{
          DEFAULT:'#223240',//rgb(34,50,64)
          light:'#2d4850',//'rgb(45 72 80 / 70%)',
        }
      },
      spacing:{
        '3sz':'0.1875rem',//3px
        '5sz':'0.3125rem',//5px
        '9sz':'0.5625rem',//9px
        '10sz':'0.625rem',//10px
        '15sz':'0.9375rem',//15px
        '17sz':'1.0625',//17px
        '18sz':'1.125rem',//18px
        '30sz':'1.875rem',//30px
        '60sz':'3.75rem',//60px
        '82sz':"5.125rem",//82px
        '100sz':'6.25rem',//100px
        '104sz':'6.5rem',//104px
        '140sz':'8.75rem',//140px
        '10vw':'10vw',
        '10%':'10%',
        
      },
      letterSpacing:{
        '0.125':'0.125rem',//2px
        '0.0625':'0.0625rem',//1px
        '0.25':'0.25rem',//4px
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
        '1.06':'1.06',//65px-61px
        '1.1':'1.1',//99px-90px
        '1.33':'1.3.3',//32px-24px
        '1.45':'1.45',//54px-37px
        '1.6':'1.6',//35.2px-22px
      },
      backgroundImage:{
        headerBgImage:"linear-gradient(270deg,#302f39,#223240 95%)",
        btnBgImage:"url('/images/noise10.webp')",
        bgNoise:"url('/images/noise10.webp')",
        heroGradientBg:"linear-gradient(90deg,#302f39,#223240)",
        cozyBgImage1:"url(/images/noise10.webp),-webkit-gradient(linear,left top,left bottom,from(rgba(213,173,143,.3)),to(rgba(213,173,143,.3))),url(/svgs/stacked-waves-haikei.svg)",
        cozyBgImage:"url(/images/noise10.webp),linear-gradient(180deg,rgba(213,173,143,.3),rgba(213,173,143,.3)),url(/svgs/stacked-waves-haikei.svg)"
      },
      backgroundSize:{
        '50':'50px,auto,cover',
        '50sz':'50px',
      },
      backgroundPosition:{
        '0':{
          x:'0px, 0px, 0px',
          y:'0px, 0px, 0px'
        }
      }
      ,
      borderRadius:{
        '10sz':'0.625rem',//10px
        '32%':'32%',
        '50%':'50%',
        '60%':'60%',
        '80%':'80%',
        '100%':'100%',
      },
      boxShadow:{
        'shadow50-primary':'0 10px 24px 0 rgb(45 72 80 / 60%)',
        'shadow50-secondary':'0 10px 24px 0 rgb(45 72 80 / 70%)',
        'shadowlight-primary':'0 10px 24px 0 rgb(196 125 87 / 90%)',
        'shadowlight-secondary':'0 10px 24px 0 rgb(196 125 87 / 90%)',
        'shadow50':'0 10px 24px 0',
      }
      ,
      maxHeight:{
        '720sz':'45rem',//720px
        
      },
      minHeight:{
        '720sz':'720px'
      },
      maxWidth:{
        '140sz':'140px',
        '300sz':'18.75',//300px
        '560sz':'35rem',//560px
        '650sz':'40.625rem',//650px
        '700sz':'43.75rem',//'700px'
        '800sz':'50rem',//800px
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
