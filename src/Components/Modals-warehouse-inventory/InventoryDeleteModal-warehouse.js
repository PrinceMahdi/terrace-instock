/* ----------------- SCSS IMPORTS ----------------- */
import "./ModalsWarehouseInventory.scss";
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
      <div className="modal-warehouseInventory">
        <div className="modal-warehouseInventory__delete">
          <h1 className="modal-warehouseInventory__title">
            Delete {inventoryName} inventory item?
          </h1>
          <p className="modal-warehouseInventory__para">
            Please confirm that you'd like to delete {inventoryName} from the
            inventory list. You won't be able to undo this action.
          </p>
          <button
            className="modal-warehouseInventory__cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <a href="/inventories">
            <button
              className="modal-warehouseInventory__delete-button"
              onClick={() => {
                deleteInventory();
              }}
            >
              Delete
            </button>
          </a>
          <img
            className="modal-warehouseInventory__icon"
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
