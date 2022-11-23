/* ---------------- SCSS IMPORTS ---------------- */
import "./WarehouseList.scss";
/* ---------------- REACT IMPORTS ---------------- */
import WarehouseCards from "../WarehouseCards/WarehouseCards";
import { useEffect, useState } from "react";
import axios from "axios";

const warehouseData = "http://localhost:8080/warehouses";

const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);
  useEffect(() => {
    const getWarehouseData = async () => {
      try {
        const { data } = await axios.get(warehouseData);
        setWarehouses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWarehouseData();
  }, []);

  return (
    <section className="warehouse-list">
      <div className="warehouse-list-wrap">
        <form className="warehouse-list__search-form">
          <label
            htmlFor="warehouseList"
            className="warehouse-list__search-label"
          >
            Warehouses
          </label>
          <div className="warehouse-list__search-input-button-wrap">
            <input
              name="warehouseList"
              id="warehouseList"
              placeholder="Search..."
              className="warehouse-list__search-input"
            />
            <button className="warehouse-list__add-warehouse-btn">
              + Add New Warehouse
            </button>
          </div>
        </form>
        <div className="warehouse-list-banner">
          <p className="warehouse-list-banner__warehouse">WAREHOUSE</p>
          <p className="warehouse-list-banner__address">ADDRESS</p>
          <p className="warehouse-list-banner__contact-name">CONTACT NAME</p>
          <p className="warehouse-list-banner__contact-info">CONTACT INFORMATION</p>
          <p className="warehouse-list-banner__actions">ACCTIONS</p>
        </div>
        <WarehouseCards warehouses={warehouses} />
      </div>
    </section>
  );
};

export default WarehouseList;
