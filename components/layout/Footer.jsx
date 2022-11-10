import Image from "next/image";
import Link from "next/link";
import Wrapper from "../ui/Wrapper";
const Footer = () => {
    return (
        <div className="footer">
            <Wrapper>
                <div className="footer__top">
                    
                    <Link href="/" ><Image src="/svgs/Cozy_logo_denim.svg" alt="Logo" width="600"height="412" className="footer__logo"/></Link>
                    <div className="footer__top-nav"> 
                        <ul className="footer__top-nav-list">
                            <li className=""><Link href={'/'} className="footer__top-nav-item">About</Link></li>
                            <li className=""><Link href={'/'} className="footer__top-nav-item">Services</Link></li>
                            <li className=""><Link href={'/'} className="footer__top-nav-item">Work</Link></li>
                            <li className=""><Link href={'/'} className="footer__top-nav-item">Blog</Link></li>
                            <li className=""><Link href={'/'} className="footer__top-nav-item">Contact</Link></li>
                        </ul>
                        <div className="footer__top-right">
                            <Link href={'/'} className="footer__top-first-social">
                                <Image height={256} width={256} alt="logo" src={'/images/emoji-402x.webp'} className="footer__top-first-social-img"/>
                                <p className="footer__top-first-social-name">San Diego Digital Designers</p>
                            </Link>
                            <ul className="footer__top-socials-list">
                                <Link href={'/'} className="footer__top-socials-link bg-sky-500 ">
                                    <Image height={16} width={16} alt="logo" src={'/svgs/twitter-icon-white.svg'} className="footer__top-socials-item"/>
                                </Link>
                                <Link href={'/'} className="footer__top-socials-link bg-sky-600">
                                    <Image height={120} width={120} alt="logo" src={'/svgs/logo-linkedin.svg'} className="footer__top-socials-item"/>
                                </Link>
                                <Link href={'/'} className="footer__top-socials-link bg-sky-800">
                                    <Image height={16} width={16} alt="logo" src={'/svgs/facebook-icon-white.svg'} className="footer__top-socials-item"/>
                                </Link>
                                <Link href={'/'} className="bg-red-500 footer__top-socials-link">
                                    <Image height={16} width={16} alt="logo" src={'/svgs/instagram-icon-white.svg'} className="footer__top-socials-item"/>
                                </Link>
                                <Link href={'/'} className="bg-red-700 footer__top-socials-link">
                                    <Image height={16} width={16} alt="logo" src={'/svgs/icn_youtube-white.svg'} className="footer__top-socials-item"/>
                                </Link>
                                <Link href={'/'} className="bg-slate-800 footer__top-socials-link">
                                    <Image height={16} width={16} alt="logo" src={'/svgs/clutch.svg'} className="footer__top-socials-item"/>
                                </Link>
                                <Link href={'/'} className="bg-slate-800 footer__top-socials-link ">
                                    <Image height={16} width={16} alt="logo" src={'/svgs/envelope.svg'} className="footer__top-socials-item"/>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </Wrapper>
        </div>
    );
}

export default Footer;