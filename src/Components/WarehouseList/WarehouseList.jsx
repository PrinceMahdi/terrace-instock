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
  console.log(warehouses);

  return (
    <section className="warehouse-list">
      <div className="warehouse-list-wrap">
        <form className="warehouse-list__search-bar">
          <label htmlFor="warehouseList" className="warehouse-list__label">
            Warehouses
            <input
              name="warehouseList"
              id="warehouseList"
              placeholder="Search"
              className="warehouse-list__search-input"
            />
          </label>
        </form>
        <button className="warehouse-list__add-warehouse-btn">
          + Add New Warehouse
        </button>
        <div className="video-list">
          <WarehouseCards warehouses={warehouses} />
        </div>
      </div>
    </section>
  );
};

export default WarehouseList;
