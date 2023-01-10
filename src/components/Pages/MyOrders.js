import React from "react";
import Navabar from "../Landing/Navabar";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { OrderDetails } from "./OrderDetails";
import { UserAuth } from "../Context/AuthContext";

export const MyOrders = () => {
  const { user } = UserAuth();
  return (
    <div className="">
      <Navabar />
      <div className="w-screen  h-full bg-zinc-300">
        <div className="pt-12">
          <div className="flex">
            <div className="flex-[0.2] pt-20 pl-[100px]">
              <h2 className="font-bold text-3xl pb-10">My Orders</h2>
              <div className="text-left">
                <button
                  className="buttonTwo"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   if (isDetailsToggled === false) {
                  //     setDetailsIsToggled(true);
                  //     setAddressIsToggled(false);
                  //     setSellerIsToggled(false);
                  //   }
                  // }}
                >
                  <div className="pr-3">
                    <ShoppingCartCheckoutIcon />
                  </div>
                  My Orders
                </button>
              </div>
            </div>
            <div className="flex-[0.8] px-10 pt-20">
              <div className="bg-zinc-200 px-10 h-full rounded-2xl py-10 w-full">
                <OrderDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
