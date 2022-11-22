import "./EditWarehouse.scss";

const EditWarehouse = () => {
  return (
    <>
      <h2 className="warehouse__edit">Edit Warehouse</h2>
      <div className="warehouse">
        <form action="" className="warehouse__form">
          <div className="warehouse__form-top">
            <h3 className="warehouse__form-warehouse">Warehouse Details</h3>
            <label htmlFor="warehouseName">
              Warehouse Name
              <input
                type="text"
                className="warehouse__name"
                name="warehouseName"
              />
            </label>
            <label htmlFor="warehouseAddress">
              Warehouse Address
              <input
                type="text"
                className="warehouse__address"
                name="warehouseAddress"
              />
            </label>
            <label htmlFor="warehouseCity">
              City
              <input
                type="text"
                className="warehouse__city"
                name="warehouseCity"
              />
            </label>
            <label htmlFor="">
              Country
              <input
                type="text"
                className="warehouse__country"
                name="warehouseCountry"
              />
            </label>
          </div>
          <div className="warehouse__form-bottom">
            <h3 className="warehouse__form-contact">Contact Details</h3>
            <label htmlFor="warehouseContact">
              Contact Name
              <input
                type="text"
                className="warehouse__contact"
                name="warehouseContact"
              />
            </label>
            <label htmlFor="warehousePosition">
              Position
              <input
                type="text"
                className="warehouse__position"
                name="warehousePosition"
              />
            </label>
            <label htmlFor="warehousePhone">
              Phone Number
              <input
                type="text"
                className="warehouse__phone"
                name="warehousePhone"
              />
            </label>
            <label htmlFor="warehouseEmail">
              Email
              <input
                type="text"
                className="warehouse__email"
                name="warehouseEmail"
              />
            </label>
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
    </>
  );
};

export default EditWarehouse;
