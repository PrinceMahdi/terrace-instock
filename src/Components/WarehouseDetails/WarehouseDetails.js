import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import edit2 from "../../assets/icons/edit2-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./WarehouseDetails.scss";

const warehouseData = "http://localhost:8080/warehouses";
const id = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";

const WarehouseDetails = () => {
  const [warehouseinventorydetails, setWarehouseinventorydetails] = useState(
    []
  );
  const [warehousecontactdetails, setWarehousecontactdetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${warehouseData}/${id}/inventories`)
      .then((response) => {
        setWarehouseinventorydetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${warehouseData}/${id}`)
      .then((response) => {
        setWarehousecontactdetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("hi", warehouseinventorydetails);
  console.log("hello", warehousecontactdetails.city);

  return (
    <section className="warehousedet">
      <div className="warehousedet__contact">
        <div className="warehousedet__name-edit">
          <div className="warehousedet__icon-name">
            <img className="warehousedet__icon" src={arrowBack} alt="" />
            <h1 className="warehousedet__name">
              {warehousecontactdetails.city}
            </h1>
          </div>
          <div className="warehousedet__edit">
            <div className="warehousedet__icon-contain">
              <img className="warehousedet__edit-icon" src={editIcon} alt="" />
              <p className="warehousedet__icon-text">Edit</p>
            </div>
          </div>
        </div>
        <div className="warehousedet__address-name">
          <div className="warehousedet__add">
            <h2 className="warehousedet__add-title">WAREHOUSE ADDRESS</h2>
            <p className="warehousedet__title-mob">
              {warehousecontactdetails.address}, {warehousecontactdetails.city},{" "}
              {warehousecontactdetails.country}
            </p>
            <p className="warehousedet__title-tab">
              {warehousecontactdetails.address},
            </p>
            <p className="warehousedet__title-tab">
              {warehousecontactdetails.city}, {warehousecontactdetails.country}
            </p>
          </div>
          <div className="warehousedet__name-info">
            <div className="warehousedet__name-desi">
              <h2 className="warehousedet__conname">CONTACT NAME</h2>
              <p className="warehousedet__fullname">
                {warehousecontactdetails.contact_name}
              </p>
              <p className="warehousedet__desi">
                {warehousecontactdetails.contact_position}
              </p>
            </div>
            <div className="warehousedet__info-mail">
              <h2 className="warehousedet__con-info">CONTACT INFORMATION</h2>
              <p className="warehousedet__con-num">
                {warehousecontactdetails.contact_phone}
              </p>
              <p className="warehousedet__con-mail">
                {warehousecontactdetails.contact_email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="warehousedet__label-container">
        <div className="warehousedet__label-lists">
          <div className="warehousedet__label-list">
            <p className="warehousedet__label-item">INVENTORY ITEM</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list">
            <p className="warehousedet__label-item">CATEGORY</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list">
            <p className="warehousedet__label-item">STATUS</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list">
            <p className="warehousedet__label-item">QUANTITY</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list">
            <p className="warehousedet__label-item">ACTIONS</p>
          </div>
        </div>
      </div>

      {warehouseinventorydetails.map((inventory) => (
        <div className="warehousedet__list" key={inventory.id}>
          <div className="warehousedet__item-status-icons">
            <div className="warehousedet__item-status">
              <div className="warehousedet__item-cat">
                <div className="warehousedet__item">
                  <h2 className="warehousedet__item-title">INVENTORY ITEM</h2>
                  <div className="warehousedet__item-name-icon">
                    <p className="warehousedet__item-names">
                      {inventory.item_name}
                    </p>
                    <img
                      className="warehousedet__icon-chevron"
                      src={chevronIcon}
                      alt=""
                    />
                  </div>
                </div>
                <div className="warehousedet__cat">
                  <h2 className="warehousedet__cat-title">CATEGORY</h2>
                  <p className="warehousedet__cat-actual">
                    {inventory.category}
                  </p>
                </div>
              </div>
              <div className="warehousedet__status-qty">
                <div className="warehousedet__status-button">
                  <h2 className="warehousedet__status-title">STATUS</h2>

                  {inventory.status === "In Stock" ? (
                    <div className="warehousedet__status-container">
                      <p className="warehousedet__status-condition">
                        {inventory.status}
                      </p>
                    </div>
                  ) : (
                    <div className="warehousedet__status-container-out">
                      <p className="warehousedet__status-condition warehousedet__status-condition-out">
                        {inventory.status}
                      </p>
                    </div>
                  )}
                </div>
                <div className="warehousedet__qty-num">
                  <h2 className="warehousedet__qty-heading">QTY</h2>
                  <p className="warehousedet__qty-full-number">
                    {inventory.quantity}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehousedet__del-edit-icon">
              <img
                className="warehousedet__del-inventory-item"
                src={deleteIcon}
                alt=""
              />
              <img
                className="warehousedet__edit-inventory-item"
                src={edit2}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WarehouseDetails;
