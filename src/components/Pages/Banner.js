import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerImage from "../../assets/banner.png";
import BannerTwo from "../../assets/bannerTwo.png";
import BannerThree from "../../assets/banner3.png";
import BannerFour from "../../assets/banner4.png";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-zinc-100 to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src={BannerImage} alt="Product" />
        </div>
        <div>
          <img loading="lazy" src={BannerTwo} alt="Product" />
        </div>
        <div>
          <img loading="lazy" src={BannerThree} alt="Product" />
        </div>
        <div>
          <img loading="lazy" src={BannerFour} alt="Product" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
