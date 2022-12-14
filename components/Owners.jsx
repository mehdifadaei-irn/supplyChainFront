import React, { useState, useEffect } from "react";
import { TbArrowsRight } from "react-icons/tb";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../contractAbi/abi";

function Owners({ open, onClose, slug }) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  function closeModal(e) {
    if (e.target.id === "container") onClose();
  }

  const { runContractFunction: getOwnersOf } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getOwnersOf",
    params: { _id: slug },
  });

  useEffect(() => {
    async function get() {
      const val = await getOwnersOf();
      setDatas(val);
    }
    setLoading(true);
    get();
    setLoading(false);
  }, []);

  function click() {
    console.log(datas[1]);
  }

  if (!open) return null;
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        id="container"
      >
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div
            className="bg-white rounded p-5 flex flex-row"
            onClick={click}
            dir="ltr"
          >
            {datas.map((data, index) => {
              const timeStamp = parseInt(data.timeOwned._hex);
              const time = new Date(timeStamp);
              const timeString = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()} \n 
              ${time.getHours()}h:${time.getMinutes()}m:${time.getSeconds()}s`;
              return (
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center bg-blue-300 mx-2 rounded px-2 py-1 ">
                    <p className="font-bold">{data.owner}</p>
                    <p className="">{timeString}</p>
                  </div>
                  {index !== datas.length - 1 && <TbArrowsRight size={30} />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Owners;
