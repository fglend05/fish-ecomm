import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import LoginOptions from "../Options/LoginOptions";
import NavOptions from "../Options/NavOptions";
import NavOptionsMobile from "../Options/NavOptionsMobile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { selectItems } from "../features/basketSlice";
import logo from "../../assets/logo.png";
import { db } from "../Firebase/firebase";

function Navabar() {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setNav(!nav);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const items = useSelector(selectItems);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsChecked, setCartProductsChecked] = useState([]);

  const uid = (user ?? [])[0];
  useEffect(() => {
    fetchData();
    fetchCartData();
  }, []);

  const fetchData = async () => {
    if (user) {
      await db.collection("Cart " + uid.id).onSnapshot((snapshot) => {
        const newCart = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCartProducts(newCart);
      });
    } else {
      console.log("Please sign in");
    }
  };
  const fetchCartData = async () => {
    if (user) {
      await db.collection("Buyer-cart " + uid.id).onSnapshot((snapshot) => {
        const newCarts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCartProductsChecked(newCarts);
      });
    } else {
      console.log("Please sign in");
    }
  };

  const handleSignOut = async () => {
    try {
      await logout().then(() => {
        navigate("/");
        console.log("Logout");
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg z-50">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-[75px] h-[75px]" />
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Dried Bit.</h1>
        </div>
        <div className="hidden md:flex pr-4 text-center">
          <ul className="hidden md:flex cursor-pointer rounded-md">
            <Link to="/">
              <NavOptions title="Home" />
            </Link>
            <Link to="/market">
              <NavOptions title="Market" />
            </Link>

            <Link to="/aboutus">
              <NavOptions title="About Us" />
            </Link>
            <Link to="/contactus">
              <NavOptions title="Contact Us" />
            </Link>
            {!user && (
              <>
                <Link to="/login">
                  <button className="border-none bg-transparent text-black p-4 ml-6">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="mt-1 px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            <div className="pt-4">
              {user && (
                <>
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <LoginOptions
                      Icon={AccountCircleIcon}
                      className="w-10 h-10"
                    />
                  </button>
                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                      <div className="py-1">
                        <Link to="/checkout">
                          <button className="group flex items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white  ease-in-out duration-300">
                            <ShoppingCartIcon
                              className="mr-5 h-5 w-5 text-gray-400 group-hover:text-white ease-in-out duration-300"
                              aria-hidden="true"
                            />
                            View Cart ({cartProducts.length})
                          </button>
                        </Link>
                        <Link to="/orders">
                          <button className="group flex items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white  ease-in-out duration-300">
                            <ShoppingCartCheckoutIcon
                              className="mr-5 h-5 w-5 text-gray-400 group-hover:text-white ease-in-out duration-300"
                              aria-hidden="true"
                            />
                            My Orders ({cartProductsChecked.length})
                          </button>
                        </Link>
                      </div>
                      <div className="py-1">
                        <Link to="/account">
                          <button className="group flex text-left items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white ease-in-out duration-300">
                            <ManageAccountsIcon
                              className="mr-5 h-5 w-5 text-gray-400 group-hover:text-white ease-in-out duration-300"
                              aria-hidden="true"
                            />
                            Manage Account ({uid.email})
                          </button>
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="group flex items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white  ease-in-out
                          duration-300"
                        >
                          <LogoutIcon
                            className="mr-5 h-5 w-5 text-gray-400 group-hover:text-white ease-in-out duration-300"
                            aria-hidden="true"
                          />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </>
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
        <div className="flex flex-col my-4">
          {!user && (
            <>
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
            </>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navabar;
