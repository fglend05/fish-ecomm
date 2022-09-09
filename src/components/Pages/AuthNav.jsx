import React, { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import NavOptions from "../Options/NavOptions";
import NavOptionsMobile from "../Options/NavOptionsMobile";
import LoginOptions from "../Options/LoginOptions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../Firebase/firebase";
import { useDispatch } from "react-redux";

const AuthNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { user, logout } = UserAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout().then(() => {
        navigate("/");
        console.log("Logout");
        window.localStorage.removeItem("isLoggedIn");
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">FishCommerce.</h1>
        </div>
        <div className="hidden md:flex pr-4 text-center ">
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
            <div className="pt-4">
              <button onClick={() => setIsOpen(!isOpen)}>
                <LoginOptions Icon={AccountCircleIcon} className="w-10 h-10" />
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                  <div className="py-1">
                    <button className="group flex items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
                      <ShoppingCartIcon
                        className="mr-5 h-5 w-5 text-gray-400 group-hover:text-white"
                        aria-hidden="true"
                      />
                      View Cart ({user[0].cart})
                    </button>
                  </div>
                  <div className="py-1">
                    <button className="group flex text-left items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
                      <ManageAccountsIcon
                        className="mr-5 h-5 w-5 text-gray-400 group-hover:text-white"
                        aria-hidden="true"
                      />
                      Manage Account ({user[0].email})
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="group flex items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                    >
                      <LogoutIcon
                        className="mr-5 h-5 w-5 text-gray-400 group-hover:text-white"
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ul>
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
      </ul>
    </div>
  );
};

export default AuthNav;
