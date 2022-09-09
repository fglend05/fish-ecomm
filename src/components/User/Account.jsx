import React from "react";
import "../Landing/Register.css";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";

function Account() {
  return (
    <div className="w-full h-screen bg-zinc-300">
      <div className="pt-12">
        <div className="flex">
          <div className="flex-[0.2] pt-20 pl-[100px] ">
            <h2 className="font-bold text-3xl pb-10">My Account</h2>
            <div className="text-left ">
              <div className="py-3 pl-3 flex hover:bg-zinc-500 hover:text-white ease-in-out duration-300 rounded-2xl cursor-pointer">
                <div className="pr-3">
                  <ManageAccountsRoundedIcon />
                </div>
                My Details
              </div>
              <div className="py-3 pl-3 flex hover:bg-zinc-500 hover:text-white ease-in-out duration-300 rounded-2xl cursor-pointer">
                <div className="pr-3">
                  <LocationOnRoundedIcon />
                </div>
                My Address
              </div>
              <div className="py-3 pl-3 flex hover:bg-zinc-500 hover:text-white ease-in-out duration-300 rounded-2xl cursor-pointer">
                <div className="pr-3">
                  <ShoppingCartRoundedIcon />
                </div>
                My Orders
              </div>
              <div className="py-3 pl-3 flex hover:bg-zinc-500 hover:text-white ease-in-out duration-300 rounded-2xl cursor-pointer">
                <div className="pr-3">
                  <StorefrontRoundedIcon />
                </div>
                Become a Seller
              </div>
            </div>
          </div>
          <div className="flex-[0.8] px-10 pt-20 ">
            <div className="bg-zinc-200 px-5 h-full rounded-2xl py-10">
              <h2 className="font-bold text-2xl pb-5">My Details</h2>
              <h3>Personal Information</h3>
              <p className="midline"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
