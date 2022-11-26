/* ----------------- SCSS IMPORTS ----------------- */
import "./Modals-inventory.scss";
/* ----------------- REACT IMPORTS ----------------- */
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/* ----------------- ASSET IMPORTS ----------------- */
import close from "../../assets/icons/close-24px.svg";

const InventoryDeleteModal = ({
  open,
  onClose,
  inventoryID,
  inventoryName,
}) => {
  if (!open) return null;

  const inventoryDelUrl = `http://localhost:8080/inventories/${inventoryID}`;
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
        </a>
      </div>
    </div>
  );
};

export default InventoryDeleteModal;
