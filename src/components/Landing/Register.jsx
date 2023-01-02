import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "../Context/AuthContext";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();
  const usersCollectionRef = collection(db, "users");

  const register = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password).then((userCredential) => {
        const user = userCredential.user;

        addDoc(usersCollectionRef, {
          uid: user.uid,
          displayName: name,
          deliveryAddress: deliveryAddress,
          phoneNumber: number,
          username: username,
          email: email,
          role: role,
          password: password,
        }).then(() => {
          setsuccessMessage("New user registered successfully");
          setName("");
          setDeliveryAddress("");
          setNumber("");
          setEmail("");
          setRole("");
          setUserName("");
          setPassword("");
          setError("");
          setTimeout(() => {
            setsuccessMessage("");
            navigate("/login");
          }, 4000);
        });
      });
    } catch (e) {
      const errorCode = e.code;
      if (errorCode === "auth/invalid-email") {
        setError("Please fill all required fields");
        console.log(errorCode);
      }
    }
  };

  return (
    <div className="w-full h-full items-center justify-center flex bg-login-gradient">
      <div className="bg-zinc-200 my-5 h-[full] w-[70vw] rounded-3xl shadow-xl shadow-zinc-500">
        <div className="flex h-[100%]">
          <div className="flex-[0.4] bg-zinc-300 rounded-l-3xl">
            <div className="pl-5 pt-5 text-2xl  font-bold">
              <Link to="/"> FishCommerce.</Link>
            </div>
            <p className="text-center pt-[40%] font-bold text-3xl">
              Already Have an Account?
            </p>
            <p className="justify-center text-center mt-5">
              Sign In and start to browse fresh fish deals!
            </p>
            <div className="text-center mt-10">
              <Link to="/login ">
                <button className="px-20 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-[0.6]">
            <div className="w-[100%] text-center mt-[3%]">
              <h2 className="font-bold text-3xl"> Register Now!</h2>
            </div>
            <span className="w-[80%] ml-[70px] mt-3 border-t-[1px] border-black block"></span>
            <div>
              {successMessage && (
                <div
                  className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Yey!</span> {successMessage}
                  </div>
                </div>
              )}
              {error && (
                <div
                  className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium ">Oops...</span> {error}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5 w-[100%] pl-5 text-center pt-5">
              <form className="" onSubmit={register}>
                <div className="">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Enter Full Name"
                    className="h-[50px] w-[70%] mb-5 rounded-full pl-5"
                  />
                </div>
                <div>
                  <input
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    type="text"
                    placeholder="Enter Address: Detailed Address"
                    className="h-[50px] w-[70%] mb-5 rounded-full pl-5"
                  />
                </div>
                <div className="">
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="text"
                    placeholder="Enter Contact Number (optional: Gcash registered)"
                    className="h-[50px] w-[70%] mb-5 rounded-full pl-5"
                  />
                </div>
                <div className="flex flex-row justify-left  ">
                  <div className="ml-20">
                    <input
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      type="text"
                      placeholder="Enter Username"
                      className="h-[50px] w-[100%] mb-5 rounded-full pl-5"
                    />
                  </div>
                  <div className="ml-5 w-[25%]">
                    <select
                      name="role"
                      id="role"
                      className="selectButton"
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                    >
                      <option value="" disabled>
                        Register as...
                      </option>
                      <option value="seller">Seller/Vendor</option>
                      <option value="buyer">Customer/Buyer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email"
                    className="h-[50px] w-[70%] mb-5 rounded-full pl-5"
                  />
                </div>
                <div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="h-[50px] w-[70%] mb-5 rounded-full pl-5"
                  />
                </div>
                <button
                  type="submit"
                  className="px-20 py-3 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
