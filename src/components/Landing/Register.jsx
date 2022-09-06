import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { login } from "../features/userSlice";
import "./Register.css";

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Please enter Full Name");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          address: address,
          number: number,
          username: username,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.id,
              displayName: name,
            })
          );
        })
        .catch((err) => alert(err));
    });
  };
  return (
    <div className="w-full h-[100vh] items-center justify-center flex bg-login-gradient">
      <div className="bg-zinc-200 my-5 h-[85vh] w-[70vw] rounded-3xl shadow-xl shadow-zinc-500">
        <div className="flex h-[100%]">
          <div className="flex-[0.4] bg-zinc-300 rounded-l-3xl">
            <div className="pl-5 pt-5 text-2xl  font-bold">FishCommerce.</div>
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
            <div className="mt-5 w-[100%] pl-5 text-center pt-5">
              <form className="">
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Enter Address"
                    className="h-[50px] w-[70%] mb-5 rounded-full pl-5"
                  />
                </div>
                <div className="">
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="text"
                    placeholder="Enter Contact Number"
                    className="h-[50px] w-[70%] mb-5 rounded-full pl-5"
                  />
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
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="Enter Username/Email"
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
                  onClick={register}
                  className="px-20 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
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
}

export default Register;
