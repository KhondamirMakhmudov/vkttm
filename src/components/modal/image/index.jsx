import React from "react";

const Modal = ({ isOpen, onClose, imgSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={imgSrc} alt={altText} />
      <div id="caption">{altText}</div>
    </div>
  );
};

export default Modal;
