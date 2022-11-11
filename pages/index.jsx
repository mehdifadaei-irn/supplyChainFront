import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-100">
      <div className="container mx-auto">
        <Header />
        <div className=" flex flex-col w-full items-center justify-center mt-14">
          <h1 className="w-3/5 text-lg">
            Everythings you need for
            <span className=" text-blue-500 font-bold"> Trust </span>
            and buy Products
            <span className="font-bold"> Fast, Secure, reliable,</span> with
            lowst cast
          </h1>
          <h1 className="

           text-blue-500 tracking-wider font-bold">FIND PRO</h1>

          <input
            type="text"
            placeholder="Enter ProdId"
            className="border-2 border-blue-400 w-3/5 pl-2 py-1"
          />
        </div>
      </div>
    </div>
  );
}
