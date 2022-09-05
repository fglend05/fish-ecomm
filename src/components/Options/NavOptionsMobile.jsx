import React from "react";

function NavOptionsMobile({ title }) {
  return (
    <div>
      <li className="border-b-2 border-zinc-300 w-full hover:bg-zinc-300">
        {title}
      </li>
    </div>
  );
}

export default NavOptionsMobile;
