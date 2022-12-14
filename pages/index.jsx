import Image from "next/image";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { SupplyContext } from "../context/context";
import { useRouter } from "next/router";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../contractAbi/abi";
import { ToastContainer, toast } from "react-toastify";



import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const { prodId, setProdId } = useContext(SupplyContext);


  const { isAuthenticated, isWeb3Enabled, account } = useMoralis();

  const notify = () => toast.error("کد رهگیری شما درست نیست");

  

  const { runContractFunction: getProdId } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getProdId",
    params: {},
  });

  async function entered(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const prod = await getProdId();
      console.log();
      if (e.target.value <= parseInt(prod._hex) && isWeb3Enabled) {
        setProdId(e.target.value);
        router.push(`/products/${e.target.value}`);
      } else {
        console.log("thsi prod id in not exist!");
        notify();
      }
    }
  }

  const { runContractFunction: OwnerOf } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "OwnerOf",
    params: { _prodId: 0 },
  });

  const { runContractFunction: getProdWithAddress } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getProdWithAddress",
    params: { _address: account },
  });

  const clicked = async () => {
    await getProdWithAddress();
    // await setAdmin(val._hex)
    
  };

  return (
    <div className="h-screen w-full bg-slate-100 overflow-y-auto" dir="rtl">
      {/* <Profile/> */}
      <div className="container mx-auto">
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
        <Header />
        {/* <button onClick={clicked}>click</button> */}
        <div className=" flex flex-col w-full items-center justify-center mt-14">
          <h1 className="w-3/5 text-md 2xl:text-lg tracking-wide fon">
            تمام چیزی که نیاز دارید برای
            <span className=" text-blue-500 font-semibold 2xl:font-bold">
              {" "}
              اعتماد{" "}
            </span>
            و خرید محصول
            <span className="font-semibold 2xl:font-bold">
              {" "}
              سریع, امن, قابل اعتماد,
            </span>{" "}
            با پایین ترین هزینه
          </h1>
          <h1 className="text-blue-500 tracking-wider font-semibold 2xl:font-bold">
            رهگیری محصول
          </h1>
          <input
            type="text"
            placeholder="کد رهگیری محصول"
            className="border-2 border-blue-400 w-3/5 pl-2 py-1  mt-5 px-2"
            onKeyPressCapture={(e) => entered(e)}
          />
        </div>


        <div className={"flex mt-32"}>
          <div className={"flex-1"}>
            <h3 className={"font-semibold fon"}>
              همه چیز را{" "}
              <span className={"text-blue-500 font-semibold"}>هوشمندانه</span>{" "}
              بخرید
            </h3>
            <h2 className="fonM">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در
            </h2>
          </div>

          <Image
            src={"/mobile1.png"}
            width={450}
            height={310}
            className={"ml-5 translate-x-20 -translate-y-10 flex-1"}
            priority={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
