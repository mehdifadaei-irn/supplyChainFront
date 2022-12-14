import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { MdCloseFullscreen } from "react-icons/md";
import { BsSave } from "react-icons/bs";
import { abi, contractAddress } from "../contractAbi/abi";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { ToastContainer, toast } from "react-toastify";
import { products } from "../contractAbi/constants";
import { FcMoneyTransfer } from "react-icons/fc";
import { AiFillCrown } from "react-icons/ai";
import { useNotification } from "@web3uikit/core";
import { Exclamation, Checkmark } from "@web3uikit/icons";

import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import ChangeCost from "./changeCost";
import ChangeOwner from "./changeOwner";

function MyProduct() {
  const [toggleModal, setToggleModal] = useState(false);
  const [lodaing, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [prodName, setProdName] = useState("s");
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useNotification();

  const [ownOpen, setOwnOpen] = useState(false);
  const [costOpen, setCostOpen] = useState(false);

  const [cost, setCost] = useState(1);
  const [desc, setDesc] = useState("");

  const { enableWeb3, isWeb3Enabled, account } = useMoralis();

  const notify = () =>
    toast.success(`محصول شما با کد رهگیری ${currentId}قرار گرفت`);

  function handleReject() {
    dispatch({
      type: "error",
      message: "reject kardi!!!!",
      title: "Rejected",
      position: "topR",
      icon: <Exclamation fontSize="30px" />,
    });
  }

  function handleSuccess() {
    dispatch({
      type: "success",
      message: "Bah Bah dadash!!!",
      title: "Success",
      position: "topR",
      icon: <Checkmark fontSize="30px" />,
    });
  }

  function closeModal(e) {
    if (e.target.id === "container") setToggleModal(false);
  }

  const { runContractFunction: createItem } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "createItem",
    params: { _productName: String(prodName), _cost: cost, _descripton: desc },
  });

  const { runContractFunction: getProdId } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getProdId",
    params: {},
  });

  const { runContractFunction: getProdWithAddress } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getProdWithAddress",
    params: { _address: account },
  });

  useEffect(() => {
    async function god() {
      const PRodId = await getProdId();
      setCurrentId(parseInt(PRodId._hex));
    }

    async function getProdByAddress() {
      const val = await getProdWithAddress();
      setDatas(val);
    }
    setLoading(true);
    god();
    getProdByAddress();
    setLoading(false);
  }, []);

  async function storeProduct() {
    await createItem();
    setToggleModal(false)
  }

  return (
    <div className=" w-full h-screen bg-slate-200">
      <ToastContainer />
      <div className="h-screen" id="container" onClick={closeModal}>
        <div className="h-16 px-8 items-center border-b-2 border-black flex justify-between">
          <h1 className="font-bold text-2xl fon">محصولات</h1>
          <p className="font-semibold">{account}</p>
          <div>
            <button
              className="flex flex-row-reverse px-4  border border-blue-600 bg-[#0149ff] py-2 rounded-3xl text-white font-semibold items-center hover:bg-blue-600"
              onClick={() => setToggleModal(true)}
            >
              ثبت محصول{" "}
              <span className="mt-1 ml-1">
                <BsPlusLg size={11} />
              </span>
            </button>
          </div>
        </div>
        {toggleModal && (
          <div className="bg-white w40 h-auto absolute top-16  lef rounded-2xl drop-shadow-2xl py-5 px-10 z-10">
            <div className=" text-right">
              <button onClick={() => setToggleModal(false)} className={""}>
                <MdCloseFullscreen size={27} className={"text-slate-600"} />
              </button>
            </div>
            <div className="pt-2 text-center">
              <h2 className="font-extrabold fon">ساخت محصول جدید</h2>
              <p className="text-slate-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم استد
              </p>
            </div>
            <form action="get">
              <div class="mb-4 mt-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  اسم محصول
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="product name"
                  onChange={(e) => setProdName(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  قیمت اولیه محصول
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="cost"
                  onChange={(e) => setCost(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  توضیحات محصول
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="description"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  className="bg-white hover:bg-blue-500 mt-1 hover:text-white border-slate-400 border-2 text-slate-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setToggleModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 flex items-center gap-2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={storeProduct}
                >
                  Save <BsSave size={16} />
                </button>
              </div>
            </form>
          </div>
        )}

        {lodaing ? (
          <div>Loading....</div>
        ) : (
          <div className="px-8 h-auto py-5 flex-row flex justify-between">
            {datas.map((prod, index) => {
              if (prod.productName !== "") {
                return (
                  <div className="border-2 w-box  h-52 rounded-xl border-blue-400 px-2 py-4 shadow-lg shadow-blue-400/50 hov flex flex-col">
                    <div className="flex justify-between w-full">
                      <p className="">کد رهگیری</p>
                      <p className="underline">{parseInt(prod.id._hex)}</p>
                    </div>
                    <div className="flex justify-between w-full">
                      <p className="">نام محصول</p>
                      <p className="underline">{prod.productName}</p>
                    </div>
                    <div className="flex justify-between w-full mt-1">
                      <p className="">قیمت </p>
                      <p className="underline">
                        {parseInt(prod.costs[prod.costs.length - 1].cost._hex)}
                      </p>
                    </div>
                    <div className="flex justify-between w-full mt-1">
                      <p className="">صاحب محصول</p>
                      {/* <p className="underline">{prod.address.slice(0, 5)}</p> */}
                      <p className="underline">
                        .....
                        {prod.owners[prod.owners.length - 1].owner.slice(0, 5)}
                      </p>
                    </div>
                    {/* <div className="flex justify-between w-full">
                      <p className="">توضیحات</p>
                      <p className="underline">{prod.description}</p>
                    </div> */}
                    <div className="flex justify-between mt-3">
                      <button
                        onClick={() => setCostOpen(true)}
                        className="bg-red-500 rounded items-center flex px-2 py-1 hover:scale-95 transition"
                      >
                        <p className="text-sm font-semibold text-white">
                          تغیر قیمت
                        </p>
                        <FcMoneyTransfer />
                      </button>
                      <button
                        onClick={() => setOwnOpen(true)}
                        className="bg-sky-500 rounded items-center flex px-2 py-1 hover:scale-95 transition"
                      >
                        <p className="text-sm font-semibold text-white">
                          تغیر مالکیت
                        </p>
                        <AiFillCrown />
                      </button>
                    </div>
                    <Link
                      className="items-center gf bg-gray-600 rounded-xl mt-2 py-1 px-3 w-200 justify-center mr-6 text-white hover:scale-95 transition"
                      href={`/products/${parseInt(prod.id._hex)}`}
                    >
                      مشاهده کلی محصول
                    </Link>
                    <ChangeCost
                      open={costOpen}
                      onClose={() => setCostOpen(false)}
                      prodId={parseInt(prod.id._hex)}
                    />
                    <ChangeOwner
                      open={ownOpen}
                      onClose={() => setOwnOpen(false)}
                      prodId={parseInt(prod.id._hex)}
                    />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProduct;
