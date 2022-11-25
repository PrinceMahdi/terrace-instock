import React from "react";
import { Link } from "react-router-dom";
import "./Modals.scss";
import close from "../../assets/icons/close-24px.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
const warehouseData = "http://localhost:8080/inventories";
const InventoryDeleteModal = () => {
  const params = useParams();
  const [warehouseinventorydetails, setWarehouseinventorydetails] = useState(
    []
  );
  useEffect(() => {
    axios
      .get(`${warehouseData}/${params.id}`)
      .then((response) => {
        setWarehouseinventorydetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="modal">
        <div className="modal__delete">
          <h1 className="modal__title">
            Delete {warehouseinventorydetails.item_name} inventory item?
          </h1>
          <p className="modal__para">
            Please confirm that you'd like to delete this from the inventory
            list. You won't be able to undo this action.
          </p>
          <button className="modal__cancel">Cancel</button>
          <button className="modal__delete-button">Delete</button>
          <a href="/">
            <img className="modal__icon" src={close} alt="x button" />
          </a>
        </div>
      </div>
    </>
  );
};

export default InventoryDeleteModal;
