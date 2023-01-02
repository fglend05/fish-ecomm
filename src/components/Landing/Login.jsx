import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import LoginOptions from "../Options/LoginOptions";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import "./Register.css";
import logo from "../../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password).then((userCredential) => {
        setsuccessMessage("Login Sucessfull");
        console.log(setsuccessMessage.data);
        setEmail("");
        setPassword("");
        setError("");
        setTimeout(() => {
          setsuccessMessage("");
          navigate("/");
        }, 3000);
      });
    } catch (e) {
      const errorCode = e.code;
      console.log(errorCode);

      if (errorCode === "auth/invalid-email") {
        setError("Please fill all fields");
      }
      if (errorCode === "auth/user-not-found") {
        setError("Email not registered");
      }
      if (errorCode === "auth/wrong-password") {
        setError("Wrong Password");
      }
    }
  };
  return (
    <div className="w-full h-[100vh] items-center justify-center flex bg-login-gradient">
      <div className="bg-zinc-200 my-5 h-full  w-[70vw] rounded-3xl shadow-xl shadow-zinc-500">
        <div className="flex h-full">
          <div className="flex-[0.6]">
            <div className="pl-5 pt-5 text-2xl  font-bold">
              <Link to="/" className="flex">
                <img src={logo} alt="" className="w-[75px] h-[75px]" />
                <div className="pt-5">Dried Bit.</div>
              </Link>
            </div>
            <div className="text-center justify-center items-center mt-20 ">
              <p className="font-bold text-5xl mb-3">Login to Your Account</p>
              <p>Login Using Social Networks</p>
              <div className="flex justify-center p-5">
                <LoginOptions Icon={FacebookRoundedIcon} color="blue" />
                <LoginOptions Icon={GoogleIcon} color="blue" />
              </div>
              <p className="midline">or</p>
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
              <div className="mt-5">
                <form onSubmit={handleSignIn}>
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
                    className="mb-5 px-10 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
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
