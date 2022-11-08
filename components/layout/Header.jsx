import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [scrolled, setScrolled]= useState(false)
    const handleScroll=()=>{
        window.pageYOffset>20?setScrolled(true):setScrolled(false)       
    }
    useEffect(()=>{     
        window.addEventListener('scroll', handleScroll);       
    },[])
    return (
        <header
           //  className="header"
            className={(scrolled?" header--position-scrolled ":" header--position-top ")+ "header"}
          >
            <Link href="/"><Image src="/svgs/Cozy_logo_canvas.svg" alt="Logo" width="600"height="412" className="header__logo"/></Link>
            <button>
                <Image alt="menu" src="/svgs/menu.svg" height={40} width={40} className="header__menu"/>
            </button>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {['Get Cozy','What we do','Our work','The blog','Say hi'].map((item,index)=>
                    <li key={index} className="header__nav-item"><Link href="/" className="header__nav-link">{item}</Link></li>              
                    )}
               </ul>
               
            </nav>
            
        </header>
    );
}

export default Header;