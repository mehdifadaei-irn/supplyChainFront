import React from "react";
import Image from "next/image";
import Styles from "../styles/Index.module.css";
import { ConnectButton } from "@web3uikit/web3";
import Link from "next/link";
import { useWeb3Contract, useMoralis } from "react-moralis";

function Header() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();

  // console.log(enableWeb3);
  console.log(isWeb3Enabled);

  return (
    <div className="flex h-16 justify-between align-middle px-2">
      <Link href={"/"} className="self-center cursor-pointer mt-6">
        <Image src={"/lg1.png"} width={130} height={40} />
      </Link>
      <ul className="hidden flex-wrap mr-4 items-center font-bold 2xl:flex">
        <Link
          href={"/"}
          className="pr-8 hover:text-blue-500 hover:underline cursor-pointer "
        >
          Home
        </Link>
        <Link className="pr-8 hover:text-blue-500 hover:underline cursor-pointer "  href={"/profile/12"}>
          Profile
        </Link>
        <li className="pr-8 hover:text-blue-500 hover:underline cursor-pointer ">
          OurToken
        </li>
        <li className="hover:text-blue-500 hover:underline cursor-pointer transition-opacity ">
          Contact
        </li>
      </ul>
      <div className="self-center">
        <ConnectButton />
      </div>
    </div>
  );
}

export default Header;
