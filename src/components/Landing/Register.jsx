import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import loginBg from "../../assets/fish-hero-bg.jpg";
import { UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";

function Register() {
  return (
    <div className="w-full h-full">
      <div className="bg-login-gradient bg-no-repeat bg-cover bg-center flex items-center justify-center h-[100vh] opacity-90">
        <div className="bg-zinc-200 py-5 px-5 h-[85vh] w-[50vw] rounded-3xl shadow-xl shadow-zinc-500">
          <div className="text-center py-5">
            <p className="text-2xl"> Register</p>
          </div>
          <div className="flex">
            <div className="w-[50%]">
              <img
                src={loginBg}
                alt="Login Image"
                className="bg-cover bg-no-repeat h-[70vh] w-[100vh] rounded-3xl"
              />
            </div>
            <form action="#">
              <div className="forms w-full pt-5 px-2">
                <div className="grid grid-cols-2 gap-1 px-2">
                  <div className="bg-zinc-100 rounded-3xl h-[40px]">
                    <input
                      type="text"
                      name=""
                      placeholder="First Name"
                      className="h-[40px] w-[100%] rounded-3xl pl-5"
                    />
                  </div>
                  <div className="bg-zinc-100 rounded-3xl h-[40px]">
                    <input
                      type="text"
                      name=""
                      placeholder="Last Name"
                      className="h-[40px] w-[100%] rounded-3xl pl-5"
                    />
                  </div>
                </div>
                <div className="py-5 px-2">
                  <input
                    type="text"
                    name=""
                    placeholder="Address"
                    className="w-[100%] h-[40px] rounded-3xl pl-5"
                  />
                </div>
                <div className="pb-5 px-2">
                  <input
                    type="text"
                    name=""
                    placeholder="Contact Number"
                    className="w-[100%] h-[40px] rounded-3xl pl-5"
                  />
                </div>
                <div className="pb-5 px-2">
                  <input
                    type="email"
                    name=""
                    placeholder="Email Address"
                    className="w-[100%] h-[40px] rounded-3xl pl-5"
                  />
                </div>
                <div className="pb-5 px-2">
                  <input
                    type="email"
                    name=""
                    placeholder="Username"
                    className="w-[100%] h-[40px] rounded-3xl pl-5"
                  />
                </div>
                <div className="grid grid-cols-2 gap-1 px-2">
                  <div className="bg-zinc-100 rounded-3xl h-[40px]">
                    <input
                      type="passwowrd"
                      name=""
                      placeholder="Password"
                      className="h-[40px] w-[100%] rounded-3xl pl-5"
                    />
                  </div>
                  <div className="bg-zinc-100 rounded-3xl h-[40px]">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="h-[40px] w-[100%] rounded-3xl pl-5"
                    />
                  </div>
                </div>
                <div className="py-5 px-5 flex w-[100%]">
                  <div className="shrink-0 hidden">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src={UserCircleIcon}
                      alt="Current profile photo"
                    />
                  </div>
                  <div className="items-center text-center justify-center pl-5">
                    <input
                      type="file"
                      className="block w-[100%] text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                  </div>
                </div>
                <div className="w-[100%] items-center justify-center text-center">
                  <button
                    className="h-[50px] w-[250px] bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
                    type=""
                  >
                    Sign up
                  </button>
                </div>
                <div className="w-full text-right pt-5">
                  <p>
                    Already have an Account?
                    <Link to="/login" className="text-blue">
                      Login!
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
