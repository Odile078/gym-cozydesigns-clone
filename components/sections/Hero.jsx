import Wrapper from "../ui/Wrapper";
import Button from "../ui/Button";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="hero">
            <Wrapper hero={true}>
                <div className="hero__container">
                    <div className="hero__content">
                        <h1 className="hero__title">Your design team for the cost of a salary.</h1>
                        <h4 className="hero__description">Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don &apos;t ? </h4>
                        <Button variant=" button--bg-image " text="See how we work & what we can do" url="/"/>
                    </div>
                    <div className="hero__img-container">
                        <Image sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 79vw, (max-width: 1279px) 63vw, 58vw" srcSet="/images/getcozy-p-500.png 500w, /images/getcozy-p-800.png 800w, /images/getcozy.png 1000w" src="/images/getcozy.png" alt="" className="hero__img" width={846} height={861}></Image>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Hero;