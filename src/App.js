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
import Products from "./components/Landing/Products";
import Account from "./components/User/Account";
import ProtectedRoute from "./components/ProtectedRoute";

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
              <>
                <Navabar /> <Hero /> <Products />
              </>
            }
          />
          {/* Sign in Page */}
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* HomePages */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Navabar />
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/market" element={<Market />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
