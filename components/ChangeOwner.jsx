import React, { useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../contractAbi/abi";

function ChangeOwner({ open, onClose, prodId }) {
  function closeModal(e) {
    if (e.target.id === "container") onClose();
  }

  const [newOwner, setNewOwner] = useState();

  const { runContractFunction: addNewOwner } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "addNewOwner",
    params: { _prodId: prodId, _newOwner: newOwner },
  });
  async function submit() {
    const val = await addNewOwner();
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
      <button onClick={submit} className="bg-blue-500 rounded-lg px-2 py-2 text-white">ثبت مالکیت</button>
        <input
          type="text"
          id="first_name"
          className="border border-blue-500 mx-3 rounded-lg py-1 px-2"
          placeholder="ادرس مالک بعدی"
          required
          onChange={(e) => setNewOwner(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default ChangeOwner;
