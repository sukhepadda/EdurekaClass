import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.png";

const Imgslideshow = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay interval={1000}>
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};
export default Imgslideshow;
