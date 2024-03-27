import React, { useState } from "react";
import CustomModal from "react-modal";

CustomModal.setAppElement("#root");

const Modal = ({ open, setOpen, children }) => {
  const customStyle = {
    content: {
      width: "80%",
      height: "60%",
      margin: "auto",
      borderRadius: "0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(10px)",
    },
  };
  return (
    <CustomModal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyle}
    >
      {children}
    </CustomModal>
  );
};

export default Modal;
