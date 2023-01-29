import React from "react";
import "../Landing/Register.css";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MyDetails from "./MyDetails";
import MyAdress from "./MyAdress";
import { useState } from "react";
import Selling from "./Selling";
import { UserAuth } from "../Context/AuthContext";
import Sold from "./Sold";

function Account() {
  const { user } = UserAuth();
  const [isDetailsToggled, setDetailsIsToggled] = useState(true);
  const [isAddressToggled, setAddressIsToggled] = useState(false);
  const [isSellerToggled, setSellerIsToggled] = useState(false);
  const [isSoldToggled, setSoldIsToggled] = useState(false);

  return (
    <div className="w-screen  h-full bg-zinc-300">
      <div className="pt-12">
        <div className="flex">
          <div className="flex-[0.2] pt-20 pl-[100px] ">
            <h2 className="font-bold text-3xl pb-10">My Account</h2>
            <div className="text-left ">
              <button
                className="buttonTwo"
                onClick={(e) => {
                  e.preventDefault();
                  if (isDetailsToggled === false) {
                    setDetailsIsToggled(true);
                    setAddressIsToggled(false);
                    setSellerIsToggled(false);
                    setSoldIsToggled(false);
                  }
                }}
              >
                <div className="pr-3">
                  <ManageAccountsRoundedIcon />
                </div>
                My Details
              </button>

              {/* <button
                className="buttonTwo"
                onClick={(e) => {
                  e.preventDefault();
                  if (isAddressToggled === false) {
                    setDetailsIsToggled(false);
                    setAddressIsToggled(true);
                    setSellerIsToggled(false);
                  }
                }}
              >
                <div className="pr-3">
                  <LocationOnRoundedIcon />
                </div>
                Delivery Address
              </button> */}
              {user[0].role === "seller" && (
                <>
                  <button
                    className="buttonTwo"
                    onClick={(e) => {
                      e.preventDefault();
                      if (isSellerToggled === false) {
                        setDetailsIsToggled(false);
                        setAddressIsToggled(false);
                        setSoldIsToggled(false);
                        setSellerIsToggled(true);
                      }
                    }}
                  >
                    <div className="pr-3">
                      <StorefrontRoundedIcon />
                    </div>
                    List Products
                  </button>
                  <button
                    className="buttonTwo"
                    onClick={(e) => {
                      e.preventDefault();
                      if (isSoldToggled === false) {
                        setDetailsIsToggled(false);
                        setAddressIsToggled(false);
                        setSellerIsToggled(false);
                        setSoldIsToggled(true);
                      }
                    }}
                  >
                    <div className="pr-3">
                      <MonetizationOnIcon />
                    </div>
                    Sold Products
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="flex-[0.8] px-10 pt-20">
            <div className="bg-zinc-200 px-10 h-full rounded-2xl py-10 w-full">
              {/* Open Close for My account details */}
              {isDetailsToggled && <MyDetails />}
              {isAddressToggled && <MyAdress />}
              {user[0].role === "seller" && isSellerToggled && <Selling />}
              {user[0].role === "seller" && isSoldToggled && <Sold />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
