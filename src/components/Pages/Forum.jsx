import React from "react";
import Navabar from "../Landing/Navabar";
import ForumData from "./ForumData";

function Forum() {
  return (
    <div>
      <Navabar />
      <div className="max-w-screen-2xl mx-auto pt-20">
        <ForumData />
      </div>
    </div>
  );
}

export default Forum;
