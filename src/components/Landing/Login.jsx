import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginOptions from "../Options/LoginOptions";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import "./Register.css";
import { auth } from "../Firebase/firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="w-full h-[100vh] items-center justify-center flex bg-login-gradient">
      <div className="bg-zinc-200 my-5 h-[85vh] w-[70vw] rounded-3xl shadow-xl shadow-zinc-500">
        <div className="flex h-[100%]">
          <div className="flex-[0.6]">
            <div className="pl-5 pt-5 text-2xl  font-bold">FishCommerce.</div>
            <div className="text-center justify-center items-center mt-20 ">
              <p className="font-bold text-5xl mb-3">Login to Your Account</p>
              <p>Login Using Social Networks</p>
              <div className="flex justify-center p-5">
                <LoginOptions Icon={FacebookRoundedIcon} color="blue" />
                <LoginOptions Icon={GoogleIcon} color="blue" />
              </div>
              <p className="midline">or</p>
              <div className="mt-5">
                <form>
                  <div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-[50px] w-[50%] mb-5 rounded-full pl-5"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-[50px] w-[50%] mb-5 rounded-full pl-5"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleSignIn}
                    className="px-10 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-[0.4] bg-zinc-300 rounded-r-3xl">
            <p className="text-center pt-[40%] font-bold text-6xl">New Here?</p>
            <p className="justify-center text-center mt-5">
              Sign Up and discover fish deals at a good price and discounts!
            </p>
            <div className="text-center mt-10">
              <Link to="/signup ">
                <button className="px-20 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
