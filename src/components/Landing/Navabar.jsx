import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NavOptions from "../Options/NavOptions";
import NavOptionsMobile from "../Options/NavOptionsMobile";

function Navabar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">FishCommerce.</h1>
        </div>
        <div className="hidden md:flex pr-4 text-center">
          <ul className="hidden md:flex cursor-pointer rounded-md">
            <NavOptions title="Home" />
            <Link to="/market">
              <NavOptions title="Market" />
            </Link>
            <Link to="/forum">
              <NavOptions title="Forum" />
            </Link>
            <Link to="/aboutus">
              <NavOptions title="About Us" />
            </Link>
            <Link to="/contactus">
              <NavOptions title="Contact Us" />
            </Link>
          </ul>
          <Link to="/login">
            <button className="border-none bg-transparent text-black ml-9 pr-4 pt-4">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="mt-1 px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
              Sign Up
            </button>
          </Link>
        </div>
        <div onClick={handleClick} className="md:hidden">
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <NavOptionsMobile title="Home" />
        <NavOptionsMobile title="Market" />
        <NavOptionsMobile title="Forum" />
        <NavOptionsMobile title="About Us" />
        <NavOptionsMobile title="Contact Us" />
        <div className="flex flex-col my-4">
          <Link to="/login">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
              Sign Up
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navabar;
