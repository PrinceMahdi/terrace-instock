/* --------------- SCSS IMPORTS --------------- */
import "./AddInventoryItem.scss";
/* ---------------- DEPENDENCY IMPORTS ---------------- */
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddInventoryItem = () => {
  const [itemNameState, setItemNameState] = useState("");
  const [itemDescriptionState, setItemDescriptionState] = useState("");
  const [itemCategoryState, setItemCategoryState] = useState("");
  const [stockState, setStockState] =useState('inStock')

  const handleChangeName = (event) => {
    setItemNameState(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setItemDescriptionState(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setItemCategoryState(event.target.value);
  };
   const handleChangeStock = (event) => {
     setStockState(event.target.value);
   };
  return (
    <section className="edit__inventory-item__section">
      <div className="edit__inventory-item--top">
        <Link to=".." relative="path">
          <div className="edit__inventory-item-arrow"></div>
        </Link>
        <div className="edit__inventory-item__title">
          Add New Inventory Item
        </div>
      </div>

      <form action="" className="edit__inventory-form">
        <div className="edit__inventory-form-wrapper">
          <div className="edit__inventory-form--left">
            <h1 className="edit__inventory-item__header">Item Details</h1>
            <div className="edit__inventory-form__container">
              <label htmlFor="itemName" className="edit__inventory-item__label">
                Item Name
              </label>
              <input
                type="text"
                className="edit__inventory-item__input"
                placeholder="Item Name"
                name="itemName"
                id="itemName"
                onChange={handleChangeName}
                value={itemNameState}
              />
            </div>
            <div className="edit__inventory-form__container">
              <label
                htmlFor="itemDescription"
                className="edit__inventory-item__label"
              >
                Description
              </label>
              <textarea
                name="itemDescription"
                id="itemDescription"
                cols="30"
                rows="5"
                className="edit__inventory-item__input"
                placeholder="Description"
                onChange={handleChangeDescription}
                value={itemDescriptionState}
              ></textarea>
            </div>
            <div className="edit__inventory-form__container edit__inventory-form__container--bottom">
              <label htmlFor="category" className="edit__inventory-item__label">
                Category
              </label>
              <select
                className="edit__inventory-item__input select"
                name="category"
                id="category"
                onChange={handleChangeCategory}
              >
                <option defaultValue="" hidden>
                  Category
                </option>
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Health">Health</option>
              </select>
            </div>
          </div>
          <div className="edit__inventory-form--right">
            <h1 className="edit__inventory-item__header ">Item Availability</h1>
            <p className="edit__inventory-item__label edit__inventory-item__label--bottom">
              Status
            </p>
            <div className="edit__inventory-radio__container">
              <div className="edit__inventory-item__radio--left">
                <input
                  type="radio"
                  id="inStock"
                  name="availability"
                  value="inStock"
                  checked="checked"
                  onChange={handleChangeStock}
                ></input>
                <label htmlFor="inStock">In Stock</label>
              </div>
              <div className="edit__inventory-item__radio--right">
                <input
                  type="radio"
                  id="outOfStock"
                  name="availability"
                  value="outOfStock"
                  onChange={handleChangeStock}
                ></input>
                <label htmlFor="outOfStock">Out of Stock</label>
              </div>
            </div>
            <div className="edit__inventory-form__container">
              <label htmlFor="itemName" className="edit__inventory-item__label">
                Quantity
              </label>
              <input
                type="text"
                className="edit__inventory-item__input edit__inventory-form__quantity"
                placeholder="Quantity"
                name="quantity"
                id="quantity"
              />
            </div>
            <div className="edit__inventory-form__container">
              <label
                htmlFor="location"
                className="edit__inventory-item__label edit__inventory-item__label--top"
              >
                Warehouse
              </label>
              <select
                className="edit__inventory-item__input select"
                name="location"
                id="location"
              >
                <option defaultValue="" hidden>
                  Warehouse
                </option>
                <option value="Boston">Boston</option>
                <option value="Jersey">Jersey</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Miami">Miami</option>
                <option value="Santa Monica">Santa Monica</option>
                <option value="Seattle">Seattle</option>
                <option value="SF">SF</option>
                <option value="Washington">Washington</option>
              </select>
            </div>
          </div>
        </div>
        <div className="edit__inventory-item__button-container">
          <button className="edit__inventory-item__cancel-button">
            Cancel
          </button>
          <button className="edit__inventory-item__save-button">
            + Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddInventoryItem;
