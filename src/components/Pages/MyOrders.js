import React, { useState } from "react";
import Navabar from "../Landing/Navabar";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { OrderDetails } from "./OrderDetails";
import PendingIcon from "@mui/icons-material/Pending";
import { UserAuth } from "../Context/AuthContext";
import { OrderStatus } from "./OrderStatus";

export const MyOrders = () => {
  const { user } = UserAuth();
  const uid = (user ?? [])[0];

  const [orderToggle, setOrderToggle] = useState(true);
  const [statusToggle, setStatusToggle] = useState(false);
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
                  onClick={(e) => {
                    e.preventDefault();
                    if (orderToggle === false) {
                      setOrderToggle(true);
                      setStatusToggle(false);
                    }
                  }}
                >
                  <div className="pr-3">
                    <ShoppingCartCheckoutIcon />
                  </div>
                  My Orders
                </button>
                {uid.role === "seller" && (
                  <button
                    className="buttonTwo"
                    onClick={(e) => {
                      e.preventDefault();
                      if (statusToggle === false) {
                        setOrderToggle(false);
                        setStatusToggle(true);
                      }
                    }}
                  >
                    <div className="pr-3">
                      <PendingIcon />
                    </div>
                    View Orders
                  </button>
                )}
              </div>
            </div>
            <div className="flex-[0.8] px-10 pt-20">
              <div className="bg-zinc-200 px-10 h-full rounded-2xl py-10 w-full">
                {orderToggle && <OrderDetails />}
                {user[0].role === "seller" && statusToggle && <OrderStatus />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
