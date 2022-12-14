import Image from "next/image";
import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <div className=" bg-slate-600 h-56">
      <div className="flex justify-between py-8 h-full px-4">
        <div className=" flex flex-col  justify-between">
          <Image src={"/samin.png"} height={170} width={170} />
        </div>
        <div>
          <ul className="text-[#ffffff98]">
            <li className="font-bold text-lg translate-x-9 pb-1 hover:underline cursor-pointer">
              دسترسی سریع
            </li>
            <li className="translate-x-5 pb-1 hover:underline cursor-pointer">
              صفحه نخست
            </li>
            <li className="translate-x-3 hover:underline cursor-pointer">
              مشاهده توکن
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-[#ffffff98]">
            <li className="font-bold text-lg translate-x-9 pb-1 hover:underline cursor-pointer">
              دسترسی سریع
            </li>
            <li className="translate-x-5 pb-1 hover:underline cursor-pointer">
              صفحه نخست
            </li>
            <li className="translate-x-3 hover:underline cursor-pointer">
              مشاهده توکن
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="font-semibold text-[#ffffff96]">
            <li className="hover:underline cursor-pointer">API</li>
            <li className="hover:underline cursor-pointer">3rd Party Docs</li>
            <li className="hover:underline cursor-pointer">White Paper</li>
            <li className="hover:underline cursor-pointer">Token</li>
            <li className="hover:underline cursor-pointer">Team</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Security</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-700 h">
        <p dir="ltr" className="w-full text-center flex flex-row font-semibold justify-center py-2">
          <span>© 2022 SaminRay, Inc. All Rights Reserved.</span>
          <br />
          <span className=" flex flex-row items-center text-center">
            Made with{" "}
            <BsSuitHeartFill className="mx-2" size={24} color={"#a116b7"} /> in{" "}
            <span className="hover:underline ml-2 te font-semibold"> Iran</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
