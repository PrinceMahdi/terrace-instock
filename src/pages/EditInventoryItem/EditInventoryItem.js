import Footer from "../../Components/Footer/Footer";
import "./EditInventoryItem.scss";

const EditInventoryItem = () => {
  return (
    <>
      <section className="edit__inventory-item__section">
        <div className="edit__inventory-item--top">
          <div className="edit__inventory-item-arrow"></div>
          <div className="edit__inventory-item__title">Edit Inventory Item</div>
        </div>

        <form action="" className="edit__inventory-form">
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
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Electronics">Electronics</option>
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
                    type="radio"
                    id="inStock"
                    name="availability"
                    value="inStock"
                  ></input>
                  <label for="inStock">In Stock</label>
                </div>
                <div className="edit__inventory-item__radio--right">
                  <input
                    type="radio"
                    id="outOfStock"
                    name="availability"
                    value="outOfStock"
                  ></input>
                  <label for="outOfStock">Out of Stock</label>
                </div>
              </div>
              <div className="edit__inventory-form__container">
                <label
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
                  <option value="Manhattan">Manhattan</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Manhattan">Manhattan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="edit__inventory-item__button-container">
            <button className="edit__inventory-item__cancel-button">
              Cancel
            </button>
            <button className="edit__inventory-item__save-button">Save</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditInventoryItem;
