/* --------------- SCSS IMPORTS --------------- */
import "./AddInventoryItem.scss";
/* ---------------- DEPENDENCY IMPORTS ---------------- */
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddInventoryItem = () => {
  const navigate = useNavigate();
  // State to hold active details of form fields
  const [itemNameState, setItemNameState] = useState("");
  const [itemDescriptionState, setItemDescriptionState] = useState("");
  const [itemCategoryState, setItemCategoryState] = useState("");
  const [stockState, setStockState] = useState("");
  const [quantityState, setQuantityState] = useState("");
  const [warehouseState, setWarehouseState] = useState("");
  const [warehouseListState, setWarehouseListState] = useState([]);
  const [disableState, setDisabledState] = useState(null);

  // Event handlers to update state as form fields are edited
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
  const handleChangeQuantity = (event) => {
    setQuantityState(event.target.value);
  };
  const handleChangeWarehouse = (event) => {
    setWarehouseState(event.target.value);
  };
  // when stock state is updated to outOfStock set quantity field to 0 and disable field
  useEffect(() => {
    if (stockState === "Out Of Stock") {
      setQuantityState("0");
      setDisabledState(true);
    } else {
      setQuantityState("");
      setDisabledState(false);
    }
  }, [stockState]);

  // axios request for warehouse list, set warehouses to state to populate warehouse buttons
  useEffect(() => {
    axios.get(`http://localhost:8080/warehouses`).then((response) => {
      setWarehouseListState(response.data);
    });
  }, []);

  // check form field for content
  // TODO: validate if type of quantity state is number
  const isFormValid = () => {
    if (
      itemNameState.length < 1 ||
      itemDescriptionState.length < 1 ||
      itemCategoryState === "" ||
      stockState === "" ||
      quantityState === "" ||
      warehouseState === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  /**
 handle form submission: 
 create an object populated with data from form state
 post to server, server stores in database
 * 
 */
  const handleSubmit = (event) => {
    event.preventDefault();
    // if form valid
    if (!isFormValid()) {
      alert("please provide correct form fields");
    } else {
      const newItem = {
        warehouse_id: warehouseState,
        item_name: itemNameState,
        description: itemDescriptionState,
        category: itemCategoryState,
        status: stockState,
        quantity: quantityState,
      };
      axios
        .post(`http://localhost:8080/inventories`, newItem)
        .then((_response) => {})
        .catch((err) => {
          console.log(err);
        });
      alert("Item created, returning to inventories.");
      navigate("/inventories");
    }
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

      <form onSubmit={handleSubmit} className="edit__inventory-form">
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
                value={itemCategoryState}
              >
                <option defaultValue="" hidden>
                  Please Select
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
                  value="In Stock"
                  onChange={handleChangeStock}
                ></input>
                <label htmlFor="inStock">In Stock</label>
              </div>
              <div className="edit__inventory-item__radio--right">
                <input
                  type="radio"
                  id="outOfStock"
                  name="availability"
                  value="Out Of Stock"
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
                value={quantityState}
                onChange={handleChangeQuantity}
                disabled={disableState}
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
                onChange={handleChangeWarehouse}
              >
                <option defaultValue="" hidden>
                  Please Select
                </option>
                {Object.keys(warehouseListState).length > 0 ? (
                  warehouseListState.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>
                      {warehouse.warehouse_name}
                    </option>
                  ))
                ) : (
                  <option>loading</option>
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="edit__inventory-item__button-container">
          <Link to={"/inventories"}>
            <button
              type="button"
              className="edit__inventory-item__cancel-button"
            >
              Cancel
            </button>
          </Link>
          <button className="edit__inventory-item__save-button">
            + Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddInventoryItem;
