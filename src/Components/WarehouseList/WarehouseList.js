/* ---------------- SCSS IMPORTS ---------------- */
import "./WarehouseList.scss";
/* ---------------- REACT IMPORTS ---------------- */
import WarehouseCards from "../WarehouseCards/WarehouseCards";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
/* ---------------- ICONS IMPORTS ---------------- */
import sortIcon from "../../assets/icons/sort-24px.svg";

const warehouseData = "http://localhost:8080/warehouses";

const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  let navigate = useNavigate();
  const toAddWarehouseComponent = () => {
    let path = "/warehouses/add";
    navigate(path);
  };
  return (
    <section className="warehouse-list">
      <div className="warehouse-list-wrap">
        <div className="warehouse-list__search-form">
          <p className="warehouse-list__search-label">Warehouses</p>
          <div className="warehouse-list__search-input-button-wrap">
            <input
              name="warehouseList"
              id="warehouseList"
              placeholder="Search..."
              className="warehouse-list__search-input"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <button
              className="warehouse-list__add-warehouse-btn"
              onClick={toAddWarehouseComponent}
            >
              + Add New Warehouse
            </button>
          </div>
        </div>
        <div className="warehouse-list-banner">
          <div className="warehouse-list-banner__text-icon-wrap">
            <p className="warehouse-list-banner__title">WAREHOUSE</p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortWarehouse"
              onClick={() => {
                alert("it's working");
              }}
            />
          </div>
          <div className="warehouse-list-banner__text-icon-wrap">
            <p className="warehouse-list-banner__title">ADDRESS</p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortAddress"
              onClick={() => {
                alert("it's working");
              }}
            />
          </div>
          <div className="warehouse-list-banner__text-icon-wrap">
            <p className="warehouse-list-banner__title">CONTACT NAME</p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortContactName"
              onClick={() => {
                alert("it's working");
              }}
            />
          </div>
          <div className="warehouse-list-banner__text-icon-wrap">
            <p className="warehouse-list-banner__title">CONTACT INFORMATION</p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortContactInfo"
              onClick={() => {
                alert("it's working");
              }}
            />
          </div>
          <p className="warehouse-list-banner__actions">ACTIONS</p>
        </div>
        <WarehouseCards warehouses={warehouses} searchTerm={searchTerm} />
      </div>
    </section>
  );
};

export default WarehouseList;
