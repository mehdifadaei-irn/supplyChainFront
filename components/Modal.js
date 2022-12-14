import React from "react";

function Modal({ open, onClose }) {
  function closeModal(e) {
    if (e.target.id === "container") onClose();
  }

  if (!open) return null;
  return (
    // <div
    //   onClick={closeModal}
    //   className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    //   id="container"
    // >
    //   <div className="bg-white rounded p-5">
    //     <button onClick={onClose}>close</button>
    //     Modal
    //   </div>
    // </div>
    <div>
      hell
    </div>
  );
}

export default Modal;
