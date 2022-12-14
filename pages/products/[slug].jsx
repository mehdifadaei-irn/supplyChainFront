import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SupplyContext } from "../../context/context";
import Header from "../../components/Header";
import Image from "next/image";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../../contractAbi/abi";
import Costs from "../../components/Costs";
import Owners from "../../components/Owners";
import Modal from "../../components/Modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EachProduct = () => {
  // const { prodId } = useContext(SupplyContext);
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(true);

  const [isOpenCost, setIsOpenCost] = useState(false);
  const [isOpenOwner, setIsOpenOwner] = useState(false);

  const [prodObjects, setProdObjects] = useState({
    id: 0,
    name: "",
    timeCreated: "",
    description: "",
    initialCost: 0,
    creatorAddress: "",
    cost: "",
    owner: "",
  });

  const notify = () => toast(prodObjects.creatorAddress);

  const { runContractFunction: getProduct } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getProduct",
    params: { _prodId: slug },
  });

  const { runContractFunction: CostOf } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "CostOf",
    params: { _prodId: slug },
  });

  const { runContractFunction: OwnerOf } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "OwnerOf",
    params: { _prodId: slug },
  });

  const { runContractFunction: getSpecificCost } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getSpecificCost",
    params: { _prodId: slug, _state: 0 },
  });

  const { runContractFunction: getSpecificOwner } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getSpecificOwner",
    params: { _prodId: slug, _state: 0 },
  });

  async function setVars() {
    setLoading(true);
    const val = await getProduct();
    const lastCost = await CostOf();
    const lastOwner = await OwnerOf();
    const initialCost = await getSpecificCost();
    const initialOwner = await getSpecificOwner();
    const timeStamp = parseInt(val.timeCreated._hex);
    const time = new Date(timeStamp);
    const timeString = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`;

    const address = val[1];

    setProdObjects({
      id: parseInt(val.id._hex),
      name: val.productName,
      timeCreated: timeString,
      description: val.description,
      initialCost: parseInt(initialCost.cost._hex),
      creatorAddress: initialOwner.owner,
      cost: parseInt(lastCost._hex),
      owner: lastOwner,
    });
    setLoading(false);
  }

  useEffect(() => {
    setVars();
  }, []);

  return (
    <div className="h-screen w-full bg-slate-100  overflow-hidden" dir="rtl">
      <div className="container mx-auto h-auto">
        <Header />
        {loading ? (
          <div>Loading !!!!</div>
        ) : (
          <div className="flex flex-row-reverse">
            <div className="mt-10 ml-4 hidden xl:block">
              <Image src={"/prof.jpg"} width={370} height={600} alt={"prodImage"} />
            </div>
            <div className="flex-1">
              <div className="self-center justify-center">
                <h1 className="text-center font-bold mr-7 text-lg underline">
                  {prodObjects.name}
                </h1>
                <h1 className="text-center font-semibold mr-7 text-lg ">
                  کدرهگیری : {slug}
                </h1>
              </div>
              <ToastContainer />

              <div className="flex mb-7">
                <h2 className="w-1/2 font-semibold">ادرس مالک محصول:</h2>
                <h2
                  className="w-1/2 text-left hover:underline cursor-pointer pl-7"
                  onClick={notify}
                >
                  {`${prodObjects.owner.slice(
                    0,
                    6
                  )}...${prodObjects.owner.slice(-3)}`}
                </h2>
              </div>

              <div className="flex pb-3">
                <h2 className="w-1/2 font-semibold ">ساخته شده توسط : </h2>
                <h2
                  className="w-1/2 text-left hover:underline cursor-pointer pl-7"
                  onClick={notify}
                >
                  {`${prodObjects.creatorAddress.slice(
                    0,
                    6
                  )}...${prodObjects.creatorAddress.slice(-3)}`}
                </h2>
              </div>

              <div className="flex mt-5">
                <h2 className="w-1/2 font-semibold">قیمت فعلی :</h2>
                <h2 className="w-1/2 text-left pl-7 ">${prodObjects.cost}</h2>
              </div>

              <div className="flex mt-6 ">
                <h2 className="w-1/2 font-semibold">تاریخ ساخته شده :</h2>
                <h2 className="w-1/2 text-left pl-7">
                  {prodObjects.timeCreated}
                </h2>
              </div>

              <div className="flex mt-6 ">
                <h2 className="w-1/2 font-semibold">قیمت اولیه :</h2>
                <h2 className="w-1/2 text-left pl-7">
                  ${prodObjects.initialCost}
                </h2>
              </div>
              <div className="flex mt-6">
                <h2 className="w-1/2 font-semibold">تاریخچه قیمت ها :</h2>
                <div className="w-1/2 text-left pl-7">
                  <p
                    className="fonM underline cursor-pointer text-blue-500"
                    onClick={() => setIsOpenCost(true)}
                  >
                    مشاهده قیمت ها
                  </p>
                  <Costs
                    open={isOpenCost}
                    onClose={() => setIsOpenCost(false)}
                    slug={slug}
                  />
                </div>
              </div>
              <div className="flex mt-6">
                <h2 className="w-1/2 font-semibold">تاریخچه صاحبان :</h2>
                <div className="w-1/2 text-left pl-7">
                  <p
                    className="fonM underline cursor-pointer text-blue-500"
                    onClick={() => setIsOpenOwner(true)}
                  >
                    مشاهده صاحبان
                  </p>
                  <Owners
                    open={isOpenOwner}
                    onClose={() => setIsOpenOwner(false)}
                    slug={slug}
                  />
                </div>
              </div>
              <div className=" mt-5 mb-10 ">
                <h2 className="w-1/2 font-semibold">توضیحات :</h2>
                <p>{prodObjects.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EachProduct;
