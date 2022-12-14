import React from "react";
import Image from "next/image";
import Styles from "../styles/Index.module.css";
import { ConnectButton } from "@web3uikit/web3";
import Link from "next/link";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";

function Header() {
  const { enableWeb3, isWeb3Enabled, account } = useMoralis();

  // console.log(enableWeb3);
  const notify = () => toast.error("لطفا کیف پولتان را متصل کنید");

  const goToProfile = async () => {
    if (isWeb3Enabled) {
      Router.push(`/profile/${account}`);
    } else {
      notify();
    }
  };

  return (
    <div className="flex h-16 justify-between align-middle px-2">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Link href={"/"} className="self-center cursor-pointer mr-2 mt-1">
        <Image src={"/samin.png"} width={140} height={40} />
      </Link>
      <ul className="hidden flex-wrap mr-4 items-center font-bold 2xl:flex">
        <Link
          href={"/"}
          className="hover:text-blue-500 hover:underline cursor-pointer fon"
        >
          خانه
        </Link>
        <a
          className="pr-8 hover:text-blue-500 hover:underline cursor-pointer fon"
          // href={`/profile/${account}`}
          onClick={goToProfile}
        >
          پروفایل
        </a>
        <Link
          href={"/token"}
          className="pr-8 hover:text-blue-500 hover:underline cursor-pointer fon"
        >
          توکن اختصاصی
        </Link>
        <Link
          href={"/contactUs"}
          className="pr-8 hover:text-blue-500 hover:underline cursor-pointer transition-opacity fon"
        >
          تماس با ما
        </Link>
      </ul>
      <div className="self-center">
        <ConnectButton />
      </div>
    </div>
  );
}

export default Header;
