import React from "react";
import bgImg from "../../assets/fishHeroLogo.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="py-3 text-5xl md:text-7xl font-bold">
            Taste the freshness of home
          </p>
          <p className="text-2xl py-3 mb-3">
            Getting your hands on fresh, locally farmed produce has never been
            easier!
          </p>
          <Link to="/market" className="w-[100%] text-left">
            <button className="px-8 py-3 sm:w-[60%] bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
              Buy Now!
            </button>
          </Link>
        </div>
        <div>
          <img src={bgImg} alt="/" className="w-full h-[100%] rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
