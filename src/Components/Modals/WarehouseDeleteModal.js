import React from "react";
import "./Modals.scss";
import close from "../../assets/icons/close-24px.svg";
import axios from "axios";

const WarehouseDeleteModal = ({
  open,
  onClose,
  warehouseID,
  warehouseName,
}) => {
  if (!open) return null;
  const warehouseDelUrl = `http://localhost:8080/warehouses/${warehouseID}`;
  const deleteWarehouse = () => {
    axios.delete(warehouseDelUrl);
    onClose();
  };

  return (
    <>
      <div className="modal">
        <div className="modal__delete">
          <h1 className="modal__title">Delete {warehouseName} warehouse?</h1>
          <p className="modal__para">
            Please confirm that you'd like to delete {warehouseName} from the
            list of warehouses. You won't be able to undo this action.
          </p>
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="modal__delete-button"
            onClick={() => {
              deleteWarehouse();
            }}
          >
            Delete
          </button>
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
