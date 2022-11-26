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

  return (
    <section className="inventory-list">
      <div className="inventory-list-wrap">
        <form className="inventory-list__search-form">
          <label
            htmlFor="inventoryList"
            className="inventory-list__search-label"
          >
            Inventory
          </label>
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
        </form>
        <div className="inventory-list-banner">
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title">INVENTORY ITEM</p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortItem"
              onClick={() => {
                alert("sort it yourself");
              }}
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title">CATEGORY</p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortStatus"
              onClick={() => {
                alert("sort it yourself");
              }}
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title">STATUS</p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortCategory"
              onClick={() => {
                alert("sort it yourself");
              }}
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title">QTY</p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortQty"
              onClick={() => {
                alert("sort it yourself");
              }}
            />
          </div>
          <div className="inventory-list-banner__text-icon-wrap">
            <p className="inventory-list-banner__title">WAREHOUSE</p>
            <img
              src={sortIcon}
              className="inventory-list-banner__sort-icon"
              alt="sort icon"
              id="sortWarehouse"
              onClick={() => {
                alert("sort it yourself");
              }}
            />
          </div>
          <p className="inventory-list-banner__actions">ACTIONS</p>
        </div>
        <InventoryCards
          inventories={inventories}
          searchTerm={searchTerm}
        />
      </div>
    </section>
  );
};

export default InventoryList;
