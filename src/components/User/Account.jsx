import React from "react";
import "../Landing/Register.css";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import MyDetails from "./MyDetails";
import MyAdress from "./MyAdress";
import { useState } from "react";
import Selling from "./Selling";
import { UserAuth } from "../Context/AuthContext";

function Account() {
  const { user } = UserAuth();
  const [isDetailsToggled, setDetailsIsToggled] = useState(true);
  const [isAddressToggled, setAddressIsToggled] = useState(false);
  const [isSellerToggled, setSellerIsToggled] = useState(false);

  return (
    <div className="w-full h-full bg-zinc-300">
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
                  }
                }}
              >
                <div className="pr-3">
                  <ManageAccountsRoundedIcon />
                </div>
                My Details
              </button>

              <button
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
              </button>
              {user[0].role === "seller" && (
                <button
                  className="buttonTwo"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isSellerToggled === false) {
                      setDetailsIsToggled(false);
                      setAddressIsToggled(false);
                      setSellerIsToggled(true);
                    }
                  }}
                >
                  <div className="pr-3">
                    <StorefrontRoundedIcon />
                  </div>
                  List Products
                </button>
              )}
            </div>
          </div>
          <div className="flex-[0.8] px-10 pt-20">
            <div className="bg-zinc-200 px-10 h-full rounded-2xl py-10">
              {/* Open Close for My account details */}
              {isDetailsToggled && <MyDetails />}
              {isAddressToggled && <MyAdress />}
              {user[0].role === "seller" && isSellerToggled && <Selling />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
