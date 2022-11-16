import React from "react";
import { TbArrowsRight } from "react-icons/tb";

function Owners() {
  return (
    <div className="align-middle flex">
      {[1, 2, 3, 4, 5].map((data) => (
        <div className="align-middle max-w-xs overflow-hidden  hidden lg:flex">
          <div>0xEc..24</div>
          <div className="self-center mx-1">
            <TbArrowsRight />
          </div>
        </div>
      ))}
      <a href="" className="flex lg:hidden underline">Show Owners</a>
    </div>
  );
}

export default Owners;
