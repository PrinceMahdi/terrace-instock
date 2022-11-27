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
  const [sort, setSort] = useState(false);

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

  const sortData = (e) => {
    // copying the warehouse info so I don't modify it accidentally
    const newWarehouses = [...warehouses];

    const fieldName =
      e.target.innerText != "" ? e.target.innerText : e.target.name;

    let field = "";

    switch (fieldName) {
      case "WAREHOUSE":
        field = "warehouse_name";
        break;
      case "ADDRESS":
        field = "address";
        break;
      case "CONTACT NAME":
        field = "contact_name";
        break;
      case "CONTACT INFORMATION":
        field = "contact_email";
        break;
    }

    if (!sort) {
      const compare = (a, b) => {
        if (a[field] < b[field]) {
          return -1;
        }
        if (a[field] > b[field]) {
          return 1;
        }
        return 0;
      };
      setSort(true);
      setWarehouses(newWarehouses.sort(compare));
      return;
    }

    if (sort) {
      const compare = (a, b) => {
        if (a[field] < b[field]) {
          return 1;
        }
        if (a[field] > b[field]) {
          return -1;
        }
        return 0;
      };
      setSort(false);
      setWarehouses(newWarehouses.sort(compare));
    }
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
            <p className="warehouse-list-banner__title" onClick={sortData}>
              WAREHOUSE
            </p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortWarehouse"
            />
          </div>
          <div className="warehouse-list-banner__text-icon-wrap">
            <p className="warehouse-list-banner__title" onClick={sortData}>
              ADDRESS
            </p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortAddress"
            />
          </div>
          <div className="warehouse-list-banner__text-icon-wrap">
            <p className="warehouse-list-banner__title" onClick={sortData}>
              CONTACT NAME
            </p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortContactName"
            />
          </div>
          <div className="warehouse-list-banner__text-icon-wrap">
            <p className="warehouse-list-banner__title" onClick={sortData}>
              CONTACT INFORMATION
            </p>
            <img
              src={sortIcon}
              className="warehouse-list-banner__sort-icon"
              alt="sort icon"
              id="sortContactInfo"
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
