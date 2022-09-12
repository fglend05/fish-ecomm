import React from "react";
import "../Landing/Register.css";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import { UserAuth } from "../Context/AuthContext";
import { useSelector } from "react-redux";
import { selectItems } from "../features/basketSlice";

function Account() {
  const { user } = UserAuth();
  const items = useSelector(selectItems);
  return (
    <div className="w-full h-screen bg-zinc-300 ">
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
                My Orders ({items.length})
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
            <div className="bg-zinc-200 px-10 h-full rounded-2xl py-10">
              {/* Open Close for My account details */}
              <div>
                <h2 className="font-bold text-2xl pb-5">My Details</h2>
                <div>
                  <h3 className="font-bold">Personal Information</h3>
                  <span className="line my-5 rounded-md  "></span>
                  <div>
                    <div className="flex justify-evenly">
                      <div className="flex-[0.3] pr-5">
                        <p>
                          Assertively Utilize adaptive customer service for
                          future proof platforms. Completely drive optimal
                          markets
                        </p>
                      </div>
                      <div className="flex-[0.35]">
                        <div className="pb-5 ">
                          <p className="font-bold uppercase text-sm pl-2">
                            Full Name
                          </p>
                          <input
                            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            name=""
                            id=""
                            value={user[0].displayName}
                            disabled
                          />
                        </div>
                        <div className="">
                          <p className="font-bold uppercase text-sm pl-2">
                            Phone Number
                          </p>
                          <input
                            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            name=""
                            id=""
                            value={user[0].phoneNumber}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="flex-[0.35] pl-5">
                        <div className="">
                          <p className="font-bold uppercase text-sm pl-2">
                            Username
                          </p>
                          <input
                            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            name=""
                            id=""
                            value={user[0].username}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <h3 className="font-bold">Address</h3>
                  <span className="line my-5 rounded-md  "></span>
                  <div>
                    <div className="flex justify-evenly">
                      <div className="flex-[0.3] pr-5">
                        <p>
                          Assertively Utilize adaptive customer service for
                          future proof platforms. Completely drive optimal
                          markets
                        </p>
                      </div>
                      <div className="flex-[0.35]">
                        <div className="pb-5 ">
                          <p className="font-bold uppercase text-sm pl-2">
                            Home Address
                          </p>
                          <input
                            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            name=""
                            id=""
                            value={user[0].deliveryAddress}
                            disabled
                          />
                        </div>
                        <div>
                          <p className="font-bold uppercase text-sm pl-2">
                            Email
                          </p>
                          <input
                            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            name=""
                            id=""
                            value={user[0].email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="flex-[0.35]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
