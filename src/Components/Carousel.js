import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <h2>{images[currImg].title} <p>{images[currImg].subtitle}</p></h2>
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          &lt;
        </div>
        <div className="center">
         
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
             &#62;    
        </div>
      </div>
    </div>
  );
}

export default Carousel;