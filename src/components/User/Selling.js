import React, { useState } from "react";
import AddItem from "./AddItem";
import Showitem from "./Showitem";

function Selling() {
  const [addIsToggle, setAddIsToggle] = useState(true);
  const [showIsToggle, setShowIsToggle] = useState(false);
  return (
    <div>
      <h2 className="pb-5">Sell some fresh fish products</h2>
      <div className="flex">
        <div className="px-5">
          <button
            className="defButton"
            onClick={(e) => {
              e.preventDefault();
              if (addIsToggle === false) {
                setAddIsToggle(true);
                setShowIsToggle(false);
              }
            }}
          >
            List an Item
          </button>
        </div>
        <div>
          <button
            className="defButton"
            onClick={(e) => {
              e.preventDefault();
              if (showIsToggle === false) {
                setAddIsToggle(false);
                setShowIsToggle(true);
              }
            }}
          >
            Show Listed Item
          </button>
        </div>
      </div>
      {addIsToggle && <AddItem />}
      {showIsToggle && <Showitem />}
    </div>
  );
}

export default Selling;
