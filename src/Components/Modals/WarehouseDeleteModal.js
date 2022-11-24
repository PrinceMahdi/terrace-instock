import React from "react";
// import { Link } from "react-router-dom";
import "./Modals.scss";
import close from "../../assets/icons/close-24px.svg";

const WarehouseDeleteModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="modal">
        <div className="modal__delete">
          <h1 className="modal__title">Delete this warehouse?</h1>
          <p className="modal__para">
            Please confirm that you'd like to delete this from the list of
            warehouses. You won't be able to undo this action.
          </p>
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal__delete-button">Delete</button>
          <a href="/">
            <img
              className="modal__icon"
              src={close}
              alt="x button"
              onClick={onClose}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default WarehouseDeleteModal;
