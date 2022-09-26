import React from "react";
import { UserAuth } from "../Context/AuthContext";

const MyDetails = () => {
  const { user } = UserAuth();
  return (
    <div>
      <h2 className="font-bold text-2xl pb-5">My Details</h2>
      <div>
        <h3 className="font-bold">Personal Information</h3>
        <span className="line my-5 rounded-md  "></span>
        <div>
          <div className="flex justify-evenly">
            <div className="flex-[0.3] pr-5">
              <p>
                Assertively Utilize adaptive customer service for future proof
                platforms. Completely drive optimal markets
              </p>
            </div>
            <div className="flex-[0.35]">
              <div className="pb-5 ">
                <p className="font-bold uppercase text-sm pl-2">Full Name</p>
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
                <p className="font-bold uppercase text-sm pl-2">Phone Number</p>
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
                <p className="font-bold uppercase text-sm pl-2">Username</p>
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
                Assertively Utilize adaptive customer service for future proof
                platforms. Completely drive optimal markets
              </p>
            </div>
            <div className="flex-[0.35]">
              <div className="pb-5 ">
                <p className="font-bold uppercase text-sm pl-2">Home Address</p>
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
                <p className="font-bold uppercase text-sm pl-2">Email</p>
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
  );
};

export default MyDetails;
