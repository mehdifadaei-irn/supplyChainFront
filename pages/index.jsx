import Image from "next/image";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { SupplyContext } from "../context/context";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

export default function Home() {
  const router = useRouter();
  const [prod, setProd] = useState();
  const { prodId, setProdId } = useContext(SupplyContext);

  function entered(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setProdId(e.target.value);
      router.push(`/products/${e.target.value}`);
      // console.log(mora.account)
    }
  }

  return (
    <div className="h-screen w-full bg-slate-100 overflow-y-auto">
      {/* <Profile/> */}
      <div className="container mx-auto">
        <Header />
        <div className=" flex flex-col w-full items-center justify-center mt-14">
          <h1 className="w-3/5 text-md 2xl:text-lg tracking-wide">
            Everythings you need for
            <span className=" text-blue-500 font-semibold 2xl:font-bold">
              {" "}
              Trust{" "}
            </span>
            and buy Products
            <span className="font-semibold 2xl:font-bold">
              {" "}
              Fast, Secure, reliable,
            </span>{" "}
            with lowst cast
          </h1>
          <h1 className="text-blue-500 tracking-wider font-semibold 2xl:font-bold">
            FIND PRO
          </h1>
          <input
            type="text"
            placeholder="Enter ProdId"
            className="border-2 border-blue-400 w-3/5 pl-2 py-1 mt-5"
            onKeyPressCapture={(e) => entered(e)}
          />
        </div>

        <div className={"flex mt-20"}>
          <div className={"flex-1"}>
            <h3 className={"font-semibold"}>
              Buy everything{" "}
              <span className={"text-blue-500 font-semibold"}>SMARTLY</span>
            </h3>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              fuga tenetur voluptas? Fuga inventore recusandae reprehenderit
              suscipit voluptates! A at dolor fugit incidunt laudantium odit
              possimus quasi
            </h2>
          </div>

          <Image
            src={"/mobile1.png"}
            width={450}
            height={310}
            className={"ml-5 translate-x-20 -translate-y-10 flex-1"}
          />
        </div>
      </div>
    </div>
  );
}
