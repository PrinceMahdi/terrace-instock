/* ---------------- SCSS IMPORTS ---------------- */
import "./EditWarehouse.scss";

const EditWarehouse = () => {
  return (
    <div className="warehouse__wrapper">
      <div className="warehouse__header">

      <a><div>back</div></a>
      <h2 className="warehouse__edit">Edit Warehouse</h2>
      </div>
      <div className="warehouse__form-container">
        <form action="" className="warehouse__form">
          <div className="warehouse__form-top">
            <h3 className="warehouse__form-subhead">Warehouse Details</h3>
            <label className="warehouse__form-label" htmlFor="warehouseName">Warehouse Name</label>
            <input
              type="text"
              placeholder="Warehouse Name"
              className="warehouse__input"
              name="warehouseName"
            />
            <label className="warehouse__form-label" htmlFor="warehouseAddress">Warehouse Address</label>
            <input
              type="text"
              placeholder="Address"
              className="warehouse__input"
              name="warehouseAddress"
            />
            <label className="warehouse__form-label" htmlFor="warehouseCity">City</label>
            <input
              type="text"
              placeholder="City"
              className="warehouse__input"
              name="warehouseCity"
            />
            <label className="warehouse__form-label" htmlFor="">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="warehouse__input"
              name="warehouseCountry"
            />
          </div>
          <div className="warehouse__form-bottom">
            <h3 className="warehouse__form-subhead">Contact Details</h3>
            <label className="warehouse__form-label" htmlFor="warehouseContact">Contact Name</label>
            <input
              type="text"
              placeholder="Contact Name"
              className="warehouse__input"
              name="warehouseContact"
            />
            <label className="warehouse__form-label" htmlFor="warehousePosition">Position</label>
            <input
              type="text"
              placeholder="Position"
              className="warehouse__input"
              name="warehousePosition"
            />
            <label className="warehouse__form-label" htmlFor="warehousePhone">Phone Number</label>
            <input
              type="text"
              placeholder="Phone"
              className="warehouse__input"
              name="warehousePhone"
            />
            <label className="warehouse__form-label" htmlFor="warehouseEmail">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="warehouse__input"
              name="warehouseEmail"
            />
          </div>
            <div className="warehouse__buttons">
              <button className="warehouse__button warehouse__button--secondary">
                Cancel
              </button>
              <button className="warehouse__button warehouse__button--primary">
                Save
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default EditWarehouse;
