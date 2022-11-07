import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <Link href="/"><Image src="/svgs/Cozy_logo_canvas.svg" alt="Logo" width="600px"height="412px" className="logo"/></Link>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><Link href="/" className="header__nav-link">Get Cozy</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;