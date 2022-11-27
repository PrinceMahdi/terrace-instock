/* ----------------- SCSS IMPORTS ----------------- */
import "./EditInventoryItem.scss";
/* ----------------- REACT IMPORTS ----------------- */
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditInventoryItem = () => {
  const navigate = useNavigate();
  // State to hold active details of form fields
  const [itemNameState, setItemNameState] = useState("");
  const [itemDescriptionState, setItemDescriptionState] = useState("");
  const [itemCategoryState, setItemCategoryState] = useState("");
  const [stockState, setStockState] = useState("");
  const [quantityState, setQuantityState] = useState("");
  const [warehouseState, setWarehouseState] = useState("");

  // array to map through; populate dropdown warehouse options
  const [warehouseListState, setWarehouseListState] = useState([]);

  const params = useParams();

  /**
   call server for item data based on id in url
   set data from response to form

   call warehouses endpoing to populate warehouse list
   find warehouse matching item & set to state
   *  */
  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventories/${params.id}`)
      .then((response) => {
        const {
          item_name,
          description,
          category,
          status,
          quantity,
          warehouse_id,
        } = response.data;

        setItemNameState(item_name);
        setItemDescriptionState(description);
        setItemCategoryState(category);
        setStockState(status);
        setQuantityState(quantity);
        setWarehouseState(warehouse_id);

        axios.get(`http://localhost:8080/warehouses/`).then((response) => {
          setWarehouseListState(response.data);
        });
      });
  }, [params.id]);

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
    if (event.target.value === "Out of Stock") {
      setQuantityState("0");
    } else {
      setQuantityState("");
    }
  };
  const handleChangeQuantity = (event) => {
    setQuantityState(event.target.value);
  };
  const handleChangeWarehouse = (event) => {
    setWarehouseState(event.target.value);
  };

  // check form field for content
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

  // function to handle form submission
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
        quantity: quantityState.toString(),
      };
      axios
        .put(`http://localhost:8080/inventories/${params.id}`, newItem)
        .then((_response) => {})
        .catch((err) => {
          console.log(err);
        });
      alert("Item updated, returning to inventories.");
      navigate("/inventories");
    }
  };

  return (
    <>
      <section className="edit__inventory-item__section">
        <div className="edit__inventory-item--top">
          <Link to="/inventories">
            <div className="edit__inventory-item-arrow"></div>
          </Link>
          <div className="edit__inventory-item__title">Edit Inventory Item</div>
        </div>

        <form onSubmit={handleSubmit} className="edit__inventory-form">
          <div className="edit__inventory-form-wrapper">
            <div className="edit__inventory-form--left">
              <h1 className="edit__inventory-item__header">Item Details</h1>
              <div className="edit__inventory-form__container">
                <label
                  htmlFor="itemName"
                  className="edit__inventory-item__label"
                >
                  Item Name
                </label>
                <input
                  onChange={handleChangeName}
                  value={itemNameState}
                  type="text"
                  className="edit__inventory-item__input"
                  placeholder="Item Name"
                  name="itemName"
                  id="itemName"
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
                  onChange={handleChangeDescription}
                  value={itemDescriptionState}
                  name="itemDescription"
                  id="itemDescription"
                  cols="30"
                  rows="5"
                  className="edit__inventory-item__input"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="edit__inventory-form__container edit__inventory-form__container--bottom">
                <label
                  htmlFor="category"
                  className="edit__inventory-item__label"
                >
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
              <h1 className="edit__inventory-item__header ">
                Item Availability
              </h1>
              <p className="edit__inventory-item__label edit__inventory-item__label--bottom">
                Status
              </p>
              <div className="edit__inventory-radio__container">
                <div className="edit__inventory-item__radio--left">
                  <input
                    checked={stockState === "In Stock" ? true : false}
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
                    checked={stockState === "Out of Stock" ? true : false}
                    type="radio"
                    id="outOfStock"
                    name="availability"
                    value="Out of Stock"
                    onChange={handleChangeStock}
                  ></input>
                  <label htmlFor="outOfStock">Out of Stock</label>
                </div>
              </div>
              <div className="edit__inventory-form__container">
                <label
                  style={
                    stockState === "Out of Stock" ? { display: "none" } : {}
                  }
                  htmlFor="itemName"
                  className="edit__inventory-item__label"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  className="edit__inventory-item__input edit__inventory-form__quantity"
                  placeholder="Quantity"
                  name="quantity"
                  id="quantity"
                  style={
                    stockState === "Out of Stock" ? { display: "none" } : {}
                  }
                  value={stockState === "Out of Stock" ? "0" : quantityState}
                  onChange={handleChangeQuantity}
                  disabled={stockState === "Out of Stock" ? true : false}
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
                  value={warehouseState}
                >
                  <option hidden>Warehouse</option>
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
            <Link
              to="/inventories"
              className="edit__inventory-item__cancel-button__link"
            >
              <button className="edit__inventory-item__cancel-button">
                Cancel
              </button>
            </Link>
            <button className="edit__inventory-item__save-button">Save</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditInventoryItem;
