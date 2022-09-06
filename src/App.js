import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./components/Firebase/firebase";
import Hero from "./components/Landing/Hero";
import Navabar from "./components/Landing/Navabar";
import Register from "./components/Landing/Register";
import Login from "./components/Landing/Login";
import Market from "./components/Pages/Market";
import Forum from "./components/Pages/Forum";
import ContactUs from "./components/Pages/ContactUs";
import AboutUs from "./components/Pages/AboutUs";
import AuthNav from "./components/Pages/AuthNav";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./components/features/userSlice";
import { login, setUserLogOutState } from "./components/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(setUserLogOutState());
      }
    });
  }, []);
  return (
    <div>
      {/* Start Landing Page */}
      <Routes>
        {!user ? (
          <Route
            path="/"
            element={
              <>
                <Navabar /> <Hero />
              </>
            }
          ></Route>
        ) : (
          <Route path="/auth/user" element={<AuthNav />}></Route>
        )}

        {/* Sign in Page */}
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* UserDir */}

        {/* HomePages */}
        <Route path="/market" element={<Market />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
