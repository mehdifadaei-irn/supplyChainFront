import React, { useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../contractAbi/abi";

import { useNotification } from "@web3uikit/core";
import { Exclamation, Checkmark } from "@web3uikit/icons";

function ChangeCost({ open, onClose, prodId }) {
  function closeModal(e) {
    if (e.target.id === "container") onClose();
  }

  const [cost, setCost] = useState();
  const dispatch = useNotification();

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


  const { runContractFunction: addNewCost } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "addNewCost",
    params: { _prodId: prodId, _cost: cost },
  });
  async function submit() {
    await addNewCost({
      onError:handleReject,
      onSuccess: handleSuccess,
    });
    onClose();
  }

  if (!open) return null;
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      id="container"
    >
      <div className="bg-white rounded p-8 flex">
        <button onClick={submit} className="bg-blue-500 rounded-lg px-2 py-2 text-white">ثبت قیمت</button>
        <input
          type="text"
          id="first_name"
          className="border border-blue-500 mx-3 rounded-lg py-1 px-2"
          placeholder="قیمت به دلار"
          required
          onChange={(e) => setCost(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default ChangeCost;
