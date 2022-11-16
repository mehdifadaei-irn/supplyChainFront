import React from "react";
import { TbArrowsRight } from "react-icons/tb";

function Costs() {
  return (
    <div className="align-middle flex">
      {[1, 2, 3, 4, 5].map((data) => (
        <div className="align-middle max-w-xs overflow-hidden  hidden lg:flex">
          <div>90$</div>
          <div className="self-center mx-1">
            <TbArrowsRight />
          </div>
        </div>
      ))}
      <a href="" className="block lg:hidden underline">Show Costs</a>
    </div>
  );
}

export default Costs;
