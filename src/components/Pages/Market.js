import React from "react";
import Navabar from "../Landing/Navabar";
import Banner from "./Banner";
import ProductFeed from "./ProductFeed";

export default function Market() {
  return (
    <div>
      <Navabar />
      <div className="max-w-screen-2xl mx-auto pt-20">
        <Banner />
        <ProductFeed />
      </div>
    </div>
  );
}
