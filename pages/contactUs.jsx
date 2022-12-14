import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import { abi, contractAddress } from "../contractAbi/abi";
import Modal from "../components/Modal";

const apiKey =
  "McDEmVq9B72ws5fHMbZogGimAMC5hUZxDsnNmoFgJQMfb5wfL3aN5XVusMNQKhnf";

function contactUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-full flex flex-col justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto   bg-red-400 rounded hover:scale-95 transition py-2 px-3 "
      >
        OpenModal
      </button>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
        expedita autem eligendi, molestiae a maiores accusamus ea sunt tenetur
        animi, perferendis iste at nobis dignissimos quod alias reiciendis?
        Tempora iusto autem doloribus rem neque, voluptas et quae. Ex, enim
        perspiciatis? lorem600
      </p>
      <Modal open={isOpen} onClose={()=> setIsOpen(false)}/>
    </div>
  );
}

export default contactUs;
