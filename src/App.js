import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Landing/Hero";
import Navabar from "./components/Landing/Navabar";
import Register from "./components/Landing/Register";
import Login from "./components/Landing/Login";
import Market from "./components/Pages/Market";
import Forum from "./components/Pages/Forum";
import ContactUs from "./components/Pages/ContactUs";
import AboutUs from "./components/Pages/AboutUs";
import { AuthContextProvider } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./components/Landing/Products";
import Home from "./components/Pages/Home";

function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  return (
    <div>
      {/* Start Landing Page */}
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/auth/user" />
              ) : (
                <>
                  <Navabar /> <Hero /> <Products />
                </>
              )
            }
          ></Route>
          <Route
            path="/auth/user"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
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
      </AuthContextProvider>
    </div>
  );
}

export default App;
