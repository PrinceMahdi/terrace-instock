import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import edit2 from "../../assets/icons/edit2-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./WarehouseDetails.scss";
import InventoryDeleteModal from "../Modals/InventoryDeleteModal";

const warehouseData = "http://localhost:8080/warehouses";

const WarehouseDetails = () => {
  const params = useParams();
  const [warehouseinventorydetails, setWarehouseinventorydetails] = useState(
    []
  );
  const [warehousecontactdetails, setWarehousecontactdetails] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [inventoryID, setInventoryID] = useState("");
  const [inventoryName, setInventoryName] = useState("");

  useEffect(() => {
    axios
      .get(`${warehouseData}/${params.id}`)
      .then((response) => {
        setWarehousecontactdetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${warehouseData}/${params.id}/inventories`)
      .then((response) => {
        setWarehouseinventorydetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="warehousedet">
      <div className="warehousedet__contact">
        <div className="warehousedet__name-edit">
          <div className="warehousedet__icon-name">
            <Link to="/warehouses">
              <img className="warehousedet__icon" src={arrowBack} alt="" />
            </Link>
            <h1 className="warehousedet__name">
              {warehousecontactdetails.city}
            </h1>
          </div>
          <div className="warehousedet__edit">
            <Link to={"/warehouses/edit/" + warehousecontactdetails.id}>
              <div className="warehousedet__icon-contain">
                <img
                  className="warehousedet__edit-icon"
                  src={editIcon}
                  alt=""
                />
                <p className="warehousedet__icon-text">Edit</p>
              </div>
            </Link>
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
          <div className="warehousedet__label-list warehousedet__l1">
            <p className="warehousedet__label-item">INVENTORY ITEM</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list warehousedet__l2">
            <p className="warehousedet__label-item">CATEGORY</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list warehousedet__l3">
            <p className="warehousedet__label-item">STATUS</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list warehousedet__l4">
            <p className="warehousedet__label-item">QUANTITY</p>
            <img className="warehousedet__label-icon" src={sortIcon} alt="" />
          </div>
          <div className="warehousedet__label-list warehousedet__l5">
            <p className="warehousedet__label-item">ACTIONS</p>
          </div>
        </div>
      </div>
      {warehouseinventorydetails.length > 0 ? (
        <div>
          {warehouseinventorydetails.map((inventory) => (
            <div className="warehousedet__list" key={inventory.id}>
              <div className="warehousedet__item-status-icons">
                <div className="warehousedet__item-status">
                  <div className="warehousedet__item-cat">
                    <div className="warehousedet__item">
                      <h2 className="warehousedet__item-title">
                        INVENTORY ITEM
                      </h2>
                      <Link to={"/inventories/item/" + inventory.id}>
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
                      </Link>
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
                  {/* <Link to={"/inventories/delete/" + inventory.id}> */}
                  <div>
                    <img
                      className="warehousedet__del-inventory-item"
                      src={deleteIcon}
                      alt=""
                      onClick={() => {
                        setOpenModal(true);
                        setInventoryID(inventory.id);
                        setInventoryName(inventory.item_name);
                      }}
                    />
                  </div>
                  {/* </Link> */}
                  <Link to={"/inventories/item/edit/" + inventory.id}>
                    <img
                      className="warehousedet__edit-inventory-item"
                      src={edit2}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <InventoryDeleteModal
                open={openModal}
                onClose={() => {
                  setOpenModal(false);
                }}
                inventoryID={inventoryID}
                inventoryName={inventoryName}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="warehousedet__error-msg">
          There are no inventories in this warehouse
        </div>
      )}
    </section>
  );
};

export default WarehouseDetails;
