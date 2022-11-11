import React from "react";
import Image from "next/image";
import Styles from "../styles/Index.module.css";
import { ConnectButton } from "@web3uikit/web3";
import Link from 'next/link'
import { useWeb3Contract, useMoralis } from "react-moralis";

function Header() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();

  // console.log(enableWeb3);
  console.log(isWeb3Enabled);

  return (
    <div className="flex h-16 justify-between align-middle px-2">
      <Link href={"/"} className="self-center scale-125 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      </Link>
      <ul className="hidden flex-wrap mr-4 items-center font-bold  2xl:flex">
        <li className="pr-8 ">Home</li>
        <li className="pr-8">About</li>
        <li className="pr-8">OurToken</li>
        <li>Contact</li>
      </ul>
      <div className="self-center">
        <ConnectButton />
      </div>
    </div>
  );
}

export default Header;
