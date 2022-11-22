/* ---------------- SCSS IMPORTS ---------------- */
import "./EditWarehouse.scss";

const EditWarehouse = () => {
  return (
    <div className="warehouse__wrapper">
      <h2 className="warehouse__edit">Edit Warehouse</h2>
      <div className="warehouse__form-container">
        <form action="" className="warehouse__form">
          <div className="warehouse__form-top">
            <h3 className="warehouse__form-warehouse">Warehouse Details</h3>
            <label htmlFor="warehouseName">Warehouse Name</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehouseName"
            />
            <label htmlFor="warehouseAddress">Warehouse Address</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehouseAddress"
            />
            <label htmlFor="warehouseCity">City</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehouseCity"
            />
            <label htmlFor="">Country</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehouseCountry"
            />
          </div>
          <div className="warehouse__form-bottom">
            <h3 className="warehouse__form-contact">Contact Details</h3>
            <label htmlFor="warehouseContact">Contact Name</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehouseContact"
            />
            <label htmlFor="warehousePosition">Position</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehousePosition"
            />
            <label htmlFor="warehousePhone">Phone Number</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehousePhone"
            />
            <label htmlFor="warehouseEmail">Email</label>
            <input
              type="text"
              className="warehouse__input"
              name="warehouseEmail"
            />
            <div className="warehouse__buttons">
              <button className="warehouse__button warehouse__button--secondary">
                Cancel
              </button>
              <button className="warehouse__button warehouse__button--primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditWarehouse;
