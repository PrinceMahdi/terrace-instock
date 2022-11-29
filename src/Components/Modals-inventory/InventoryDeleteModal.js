/* ----------------- SCSS IMPORTS ----------------- */
import "../Modals-inventory/ModalsInventory.scss";
/* ----------------- REACT IMPORTS ----------------- */
import React from "react";
import axios from "axios";
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
  };

  return (
    <>
      <div className="modal-inventory">
        <div className="modal-inventory__delete">
          <h1 className="modal-inventory__title">
            Delete {inventoryName} inventory item?
          </h1>
          <p className="modal-inventory__para">
            Please confirm that you'd like to delete {inventoryName} from the
            inventory list. You won't be able to undo this action.
          </p>
          <button className="modal-inventory__cancel" onClick={onClose}>
            Cancel
          </button>
          <a href="/inventories">
            <button
              className="modal-inventory__delete-button"
              onClick={() => {
                deleteInventory();
              }}
            >
              Delete
            </button>
          </a>
          <img
            className="modal-inventory__icon"
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
