import Testimony from "../ui/cards/Testimony";
import Wrapper from "../ui/Wrapper";

const Testimonials = () => {
    const testimonies=[
        {   id:1,
            image:{
            src:"/images/susie.webp",
            width:"341",
            height:"341"
            },
            heading:'“One of the top design professionals…”',
            paragraph:"I connect with hundreds of talented folks on a regular basis, and I can say with complete confidence that Lee is one of the best UX designers in Aquent/Vitamin T's global network.",
            author:"SUSIE POLLASKY",
            authorByline:"Now: Leadership Recruiting @ Product Design \n at Facebook"
        },
        {   id:2,
            image:{
            src:"/images/avatar-2.webp",
            width:"400",
            height:"400"
            },
            heading:"“They’re a very well-rounded organization…”",
            paragraph:"Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased.",
            author:"MARTIN SPRITZER",
            authorByline:"General Manager @ iQuoteXpress"
        },
        {   id:3,
            image:{
            src:"/images/avatar-3.webp",
            width:"500",
            height:"500"
            },
            heading:"“They're just good people.”",
            paragraph:"They were a pleasure to work with and I'm really happy with the results. They pretty much nailed it.",
            author:"ERIC WEISS",
            authorByline:"Founder @ Full Cycle Product Development"
        },
        {   id:4,
            image:{
            src:"/images/avatar-4.webp",
            width:"500",
            height:"500"
            },
            heading:"“The project was successful”",
            paragraph:"They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional.",
            author:"Michael Weisfeld",
            authorByline:"Director of Digital Marketing @ National Funding"
        },
    ]
    return (
        <div className="testimonials">
            <Wrapper>
                <div className="testimonials__intro">
                    <h2 className="testimonials__title"> ❤️ from our clients</h2>
                    <div className="testimonials__line-divider"></div>
                </div>
                <div className="testimonials__container">
                    <div className="testimonials__row">
                        <Testimony variant={"testimony--top-left"} width={testimonies[0]?.image?.width} height={testimonies[0]?.image?.height} image={testimonies[0]?.image?.src} heading={testimonies[0]?.heading} paragraph={testimonies[0]?.paragraph} author={testimonies[0]?.author} authorByline={testimonies[0]?.authorByline}  />
                        <Testimony variant={"testimony--top-right"} width={testimonies[1]?.image?.width} height={testimonies[1]?.image?.height}  image={testimonies[1]?.image?.src} heading={testimonies[1]?.heading} paragraph={testimonies[1]?.paragraph} author={testimonies[1]?.author} authorByline={testimonies[1]?.authorByline} />
                    </div>
                    <div className="testimonials__row">
                        <Testimony variant={"testimony--bottom-left"} width={testimonies[2]?.image?.width} height={testimonies[2]?.image?.height}  image={testimonies[2]?.image?.src} heading={testimonies[2]?.heading} paragraph={testimonies[2]?.paragraph} author={testimonies[2]?.author} authorByline={testimonies[2]?.authorByline} />
                        <Testimony variant={"testimony--bottom-right"} width={testimonies[0]?.image?.width} height={testimonies[3]?.image?.height} image={testimonies[3]?.image?.src} heading={testimonies[3]?.heading} paragraph={testimonies[3]?.paragraph} author={testimonies[3]?.author} authorByline={testimonies[3]?.authorByline}/>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Testimonials;