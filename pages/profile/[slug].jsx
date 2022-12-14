import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsBagCheck, BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { TbLayoutDashboard } from "react-icons/tb";
import { ImKey } from "react-icons/im";
import { VscPerson } from "react-icons/vsc";
import MyProduct from "../../components/MyProduct";
import Dashboard from "../../components/Dashboard";
import Access from "../../components/Access";
import Account from "../../components/Account";
import { useRouter } from "next/router";

function Profile() {
  const [profileState, setProfileState] = useState("myproduct");
  const { push } = useRouter();

  return (
    <div className="h-screen w-full flex bg-slate-200" dir="rtl">
      {/* RIGHT */}
      <div className="w-1/5 border-l-2 border-blue-700 pt-6 relative">
        <div
          className="w-full flex max-h-28 items-center relative -top-3 cursor-pointer pr-3"
          onClick={() => push("/")}
        >
          <Image src={"/samin.png"} width={130} height={50} />
          {/* <h2 className="-mt-6 border-r-2 border-black mr-2 pr-2 pl-2 text-blue-400 left-16 text-1xl font-extrabold absolute    tracking-wider">
            SupplyIT
          </h2>
          <h2 className="-mt-6 font-extrabold absolute tracking-wider right-12 text-1xl">
            Pro
          </h2> */}
        </div>

        <div
          className="flex items-centerh-11 w-full px-8 items-center border-b-2 pb-3 hover:text-blue-900 cursor-pointer"
          onClick={() => setProfileState("myproduct")}
        >
          <BsBagCheck size={27} />
          <div className="flex justify-between w-full">
            <p className="ml-4 hover:underline pr-3 fonM">محصولات من</p>
            <IoIosArrowBack size={24} className="mt-1" />
          </div>
        </div>

        <div
          className="flex items-centerh-11 w-full px-8 items-center mb-44 pt-3  cursor-pointer  hover:text-blue-900"
          onClick={() => setProfileState("dashboard")}
        >
          <TbLayoutDashboard size={31} />
          <div className="flex justify-between w-full">
            <p className="ml-4 hover:underline pr-3 fonM">داشبورد</p>
            <IoIosArrowBack size={24} className="mt-1" />
          </div>
        </div>

        <div
          className="flex items-centerh-11 w-full px-8 items-center pb-2 pt-3 cursor-pointer border-t-2 border-blue-900 hover:text-blue-600 hover:underline"
          onClick={() => setProfileState("access")}
        >
          <ImKey size={31} />
          <div className="flex justify-between w-full">
            <p className="ml-4 hover:underline pr-3 fonM">دسترسی</p>
            <IoIosArrowBack size={24} className="mt-1" />
          </div>
        </div>

        <div
          className="flex items-centerh-11 w-full px-8 items-center pb-2 mt-24 cursor-pointer hover:text-blue-600"
          onClick={() => setProfileState("profile")}
        >
          <VscPerson size={41} />
          <div className="flex justify-between w-full">
            <p className="ml-4 font-semibold hover:underline hover:text-blue-600">
              Mehdi-Fada-Yi
            </p>
            <BsArrowReturnRight size={28} className="mt-1 " />
          </div>
        </div>
      </div>

      <div className="w-4/5">
        {profileState == "myproduct" ? (
          <MyProduct />
        ) : profileState == "dashboard" ? (
          <Dashboard />
        ) : profileState == "access" ? (
          <Access />
        ) : profileState == "profile" ? (
          <Account />
        ) : (
          <h1>s</h1>
        )}
      </div>
    </div>
  );
}

export default Profile;
