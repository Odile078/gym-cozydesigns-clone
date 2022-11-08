import Image from 'next/image';
import Wrapper from "../ui/Wrapper";
import Button from '../ui/Button';
const GetCozy = () => {
    return (
        <div className="get-cozy">
            <Wrapper>
                <div className='get-cozy__container'>
                    <div className='get-cozy__content'>
                        <div className='get-cozy__header'>🌴🐻🇺🇸</div>     
                        <div>
                            <h2 className='get-cozy__title'>Get Cozy</h2>
                            <h3 className='get-cozy__sub-title'>Design & digital marketing<br/>in San Diego, California</h3>
                        </div>
                        <p className='get-cozy__description'>We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯 </p>
                        <p className='get-cozy__description'>No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.</p>
                        <Button text={"Why we do what we do"} url="/" variant=""/>
                    </div>
                    <div className='get-cozy__company-list'></div>
                </div>
            </Wrapper>
        </div>
    );
}

export default GetCozy;