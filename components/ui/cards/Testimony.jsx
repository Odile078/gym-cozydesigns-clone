import Image from "next/image";
import { useState } from "react";

const Testimony = ({variant,image,width,height,heading,paragraph,author,authorByline}) => {
    return (
        <div className={" testimony "+ variant}>
            <div className=" testimony__container">
                <Image alt="avatar" width={width} height={height} src={image} className="testimony__avatar"/>
                <h2 className={"testimony__heading"+((variant==="testimony--top-left"||variant==="testimony--bottom-left")?" testimony__heading--position-right ":" testimony__heading--position-left ")}>{heading}</h2>
                <p className={"testimony__paragraph"+((variant==="testimony--top-left"||variant==="testimony--bottom-left")?" testimony__paragraph--position-right ":" testimony__paragraph--position-left ")}>{paragraph}</p>
                <div className={"testimony__author"+((variant==="testimony--top-left"||variant==="testimony--bottom-left")?" testimony__author--position-right ":" testimony__author--position-left ")}>{author}</div>
                <div className={"testimony__authorByline"+((variant==="testimony--top-left"||variant==="testimony--bottom-left")?" testimony__authorByline--position-right ":" testimony__authorByline--position-left ")}>{authorByline}</div>
            </div>           
        </div>
    );
}

export default Testimony;