import React from "react";
import "./Modals-inventory.scss";
import close from "../../assets/icons/close-24px.svg";
import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InventoryDeleteModal = ({
  open,
  onClose,
  inventoryID,
  inventoryName,
}) => {
  if (!open) return null;

  const inventoryDelUrl = `http://localhost:8080/warehouses/${inventoryID}`;
  const deleteInventory = () => {
    axios.delete(inventoryDelUrl);
    onClose();
  };

  return (
    <>
      <div className="modal">
        <div className="modal__delete">
          <h1 className="modal__title">
            Delete {inventoryName} inventory item?
          </h1>
          <p className="modal__para">
            Please confirm that you'd like to delete {inventoryName} from the
            inventory list. You won't be able to undo this action.
          </p>
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="modal__delete-button"
            onClick={() => {
              deleteInventory();
            }}
          >
            Delete
          </button>
          <img
            className="modal__icon"
            src={close}
            alt="x button"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
};

export default InventoryDeleteModal;
