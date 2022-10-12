import React from "react";
import AddItem from "./AddItem";

function Selling() {
  return (
    <div>
      <h2 className="pb-5">Sell some fresh fish products</h2>
      <div className="flex">
        <div className="px-5">
          <button className="defButton">List an Item</button>
        </div>
        <div>
          <button className="defButton">Show Listed Item</button>
        </div>
      </div>
      <AddItem />
    </div>
  );
}

export default Selling;
