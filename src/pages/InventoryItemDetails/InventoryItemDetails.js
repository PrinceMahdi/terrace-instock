/* ---------------- SCSS IMPORTS ---------------- */
import "./InventoryItemDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const InventoryItemDetails = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const params = useParams();
  const inventoriesUrl = `http://localhost:8080/inventories/${params.id}`;

  useEffect(() => {
    const getItemDetails = async () => {
      const { data } = await axios.get(inventoriesUrl);
      setItemDetails(data);
    };
    getItemDetails();
  }, []);

  const { category, description, item_name, quantity, status, warehouse_id } =
    itemDetails;

  const [warehouseName, setWarehouseName] = useState([]);
  useEffect(() => {
    const getWarehouseDetails = async () => {
      if (itemDetails.length !== 0) {
        const warehousesUrl = `http://localhost:8080/warehouses/${warehouse_id}`;
        const { data } = await axios.get(warehousesUrl);
        setWarehouseName(data);
      }
    };
    getWarehouseDetails();
  }, [warehouse_id]);

  return (
    <section className="inventory__item-details">
      <div className="inventory__item-details__container">
        <div className="inventory__item-details__container--top">
          <div className="inventory__item-details__back__arrow"></div>
          <h1 className="inventory__item-details__title">{item_name}</h1>
        </div>
        <button className="inventory__item-details__button">
          <div className="inventory__item-details__button-icon"></div>
          <div className="inventory__item-details__button-text">Edit</div>
        </button>
      </div>
      <div className="inventory__item-details--bottom">
        <div className="inventory__item-details--left">
          <h3 className="inventory__item-description__title">
            ITEM DESCRIPTION:
          </h3>
          <p className="inventory__item-description inventory__item-description--top">
            {description}
          </p>
          <h3 className="inventory__item-description__title">CATEGORY:</h3>
          <p className="inventory__item-description">{category}</p>
        </div>
        <div className="inventory__item-details--right">
          <div className="inventory__item-details--bottom-container">
            <div className="inventory__item-details--bottom-container--left">
              <h3 className="inventory__item-description__title">STATUS:</h3>
              <p
                className={
                  quantity <= 0
                    ? "inventory__item-description__label--modified inventory__item-description--top"
                    : "inventory__item-description__label inventory__item-description--top"
                }
              >
                {status}
              </p>
            </div>
            <div className="inventory__item-details--bottom-container--right">
              <h3 className="inventory__item-description__title">QUANITITY:</h3>
              <p className="inventory__item-description">{quantity}</p>
            </div>
          </div>
          <h3 className="inventory__item-description__title">WAREHOUSE:</h3>
          <p className="inventory__item-description">
            {warehouseName.warehouse_name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
