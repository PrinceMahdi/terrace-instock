/* ---------------- SCSS IMPORTS ---------------- */
import "./InventoryList.scss";
/* ---------------- REACT IMPORTS ---------------- */
import InventoryCards from "../InventoryCards/InventoryCards";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
/* ---------------- ICONS IMPORTS ---------------- */
import sortIcon from "../../assets/icons/sort-24px.svg";

const inventoriesData = "http://localhost:8080/inventories";

const InventoryList = () => {
  const [inventories, setinventories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState(false);
  useEffect(() => {
    const getInventoryData = async () => {
      try {
        const { data } = await axios.get(inventoriesData);

        setinventories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getInventoryData();
  }, []);

  let navigate = useNavigate();
  // function to change the path of the add button
  const toAddInventoryComponent = () => {
    let path = "/inventories/add";
    navigate(path);
  };

  const sortData = (e) => {
    const newInventories = [...inventories];

    const fieldName =
      e.target.innerText !== "" ? e.target.innerText : e.target.name;

    let field = "";

    switch (fieldName) {
      case "INVENTORY ITEM":
        field = "item_name";
        break;
      case "CATEGORY":
        field = "category";
        break;
      case "STATUS":
        field = "status";
        break;
      case "QTY":
        field = "quantity";
        break;
      case "WAREHOUSE":
        field = "warehouse_name";
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
      setinventories(newInventories.sort(compare));
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
      setinventories(newInventories.sort(compare));
    }
  };

  return (
    <section className="inventory-list">
      <div className="inventory-list-wrap">
        <div className="inventory-list__search-form">
          <p className="inventory-list__search-label">Inventory</p>
          <div className="inventory-list__search-input-button-wrap">
            <input
              name="inventoryList"
              id="inventoryList"
              placeholder="Search..."
              className="inventory-list__search-input"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <button
              className="inventory-list__add-inventory-btn"
              onClick={toAddInventoryComponent}
            >
              + Add New Item
            </button>
          </div>
        </div>
        <div className="inventory-list-banner">
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title" onClick={sortData}>
              INVENTORY ITEM
            </p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortItem"
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title" onClick={sortData}>
              CATEGORY
            </p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortStatus"
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title" onClick={sortData}>
              STATUS
            </p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortCategory"
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title" onClick={sortData}>
              QTY
            </p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortQty"
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title" onClick={sortData}>
              WAREHOUSE
            </p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortWarehouse"
            />
          </div>
          <p className="inventory-list-banner__actions">ACTIONS</p>
        </div>
        <InventoryCards inventories={inventories} searchTerm={searchTerm} />
      </div>
    </section>
  );
};

export default InventoryList;
