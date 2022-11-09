import Wrapper from "../ui/Wrapper";
import Image from 'next/image';
import Link from 'next/link';
const Clients = () => {
    return (
        <div className="clients">
            <Wrapper>
                <h4 className="clients__heading">More than 150 happy clients</h4>
                <ul className="clients__list">
                    <li className="client__item">
                        <Link href="/"><Image width={422} height={144} src={"/svgs/NPCA-logo-light.svg"} alt="logo" className="client__img"/></Link>
                    </li>
                    <li className="client__item">
                        <Link href="/"><Image width={500} height={152} src={"/svgs/national-funding-logo-full.svg"} alt="logo" className="client__img"/></Link>
                    </li>
                    <li className="client__item">
                        <Link href="/"><Image width={515} height={90} src={"/svgs/lightstream-logo.svg"} alt="logo" className="client__img"/></Link>
                    </li>
                    <li className="client__item">
                        <Link href="/"><Image width={445} height={164} src={"/svgs/Sapient.svg"} alt="logo" className="client__img"/></Link>
                    </li><li className="client__item">
                        <Link href="/"><Image width={490} height={106} src={"/svgs/thermofisher-logo-full.svg"} alt="logo" className="client__img"/></Link>
                    </li>
                    <li className="client__item">
                        <Link href="/"><Image width={456} height={78} src={"/svgs/sony-logo-full.svg"} alt="logo" className="client__img"/></Link>
                    </li>
                    <li className="client__item">
                        <Link href="/"><Image width={338} height={199} src={"/svgs/sdge-logo.svg"} alt="logo" className="client__img"/></Link>
                    </li>
                </ul>
            </Wrapper>
        </div>
    );
}

export default Clients;