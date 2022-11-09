import Image from 'next/image';
import Wrapper from "../ui/Wrapper";
import Button from '../ui/Button';
import Link from 'next/link';
const GetCozy = () => {
    return (
        <div className="get-cozy">
            <Wrapper>
                <div className='get-cozy__container '>
                    <div className='get-cozy__content'>
                        <div className='get-cozy__heading'>🌴🐻🇺🇸</div>        
                        <h2 className='get-cozy__title'>Get Cozy</h2>
                        <h3 className='get-cozy__sub-title'>Design & digital marketing<br/>in San Diego, California</h3>                       
                        <p className='get-cozy__description'>We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯 </p>
                        <p className='get-cozy__description'>No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.</p>
                        <Button text={"Why we do what we do"} url="/" variant=""/>
                    </div>
                    <div className='get-cozy__companies '>                     
                       <div className='get-cozy__company-list'>
                            <Link href={"/"}><Image width={500} sizes={140} height={500} srcset="/images/Clutch-Global-p-500.webp 500w, /images/Clutch-Global.webp 930w" alt='company logo' src={"/images/Clutch-Global.webp"} className="get-cozy__img" /></Link>
                            <Link href={"/"}><Image width={400} height={320} alt="" src={"/images/ca_san-diego_user-experience_2020_transparent.webp"}className="get-cozy__img" /></Link>
                            <Link href={"/"}><Image width={180} height={320}  alt='SuperbCompanies.com "Top digital marketing agencies in 2021"' src={"/images/SuperbCompanies-Leader-Award-Digital-Marketing.webp"} className="get-cozy__img" /></Link>
                            <Link href={"/"}><Image width={300} height={300}  alt='company logo' src={"/images/Best-Web-Design-Companies-Badge-2-300x300.webp"} className="get-cozy__img" /></Link>
                        </div>
                        <div className='get-cozy__company-list'>
                            <Link href={"/"}><Image width={512} height={193}  alt='company logo' src={"/svgs/Accredited-Business-Horizontal-Seal-Vector69Com.svg"} className="get-cozy__img" /></Link>
                            <Link href={"/"}><Image width={300} height={300}  alt='company logo' src={"/images/Web-Design-Services-San-Diego-California.webp"} className="get-cozy__img" /></Link>
                            <Link href={"/"}><Image width={512} height={707}  alt='Agency Vista Verified Badge' src={"/images/verified-agency-vista-badge.png"} className="get-cozy__img" /></Link>
                            <Link href={"/"}><Image width={1200} height={1200}  alt='TOP WEB DESIGNER' src={"/images/upcity-marketplace.png"} className="get-cozy__img" /></Link>
                            <Link href={"/"}><Image width={462} height={205}  alt='company logo' src={"/images/Design-Rush-Accredited-Badge.webp"} className="get-cozy__img" /></Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default GetCozy;