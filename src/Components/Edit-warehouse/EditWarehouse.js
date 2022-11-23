/* ---------------- SCSS IMPORTS ---------------- */
import "./EditWarehouse.scss";

/* ---------------- REACT IMPORTS ---------------- */
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditWarehouse = () => {
  // track state for form fields
  const [nameState, setNameState] = useState("");
  const [addressState, setAddressState] = useState("");
  const [cityState, setCityState] = useState("");
  const [countryState, setCountryState] = useState("");
  const [contactState, setContactState] = useState("");
  const [positionState, setPositionState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [emailState, setEmailState] = useState("");

  const params = useParams();

  //track and set form content via state
  const handleChangeName = (event) => {
    setNameState(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddressState(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCityState(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountryState(event.target.value);
  };
  const handleChangeContact = (event) => {
    setContactState(event.target.value);
  };
  const handleChangePosition = (event) => {
    setPositionState(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhoneState(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmailState(event.target.value);
  };

  const phoneRegex = new RegExp(
    `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`
  );
  const emailRegex = new RegExp(".+@.+..+");

  // check if phone valid
  const isPhoneValid = () => {
    if (!phoneState.match(phoneRegex)) {
      return false;
    } else {
      return true;
    }
  };

  const isEmailValid = () => {
    if (emailState.match(emailRegex)) {
      return true;
    } else {
      return false;
    }
  };

  // check if full form valid
  const isFormValid = () => {
    // check each field validated for some content
    if (
      nameState.length < 1 ||
      addressState.length < 1 ||
      cityState.length < 1 ||
      countryState < 1 ||
      contactState < 1 ||
      positionState < 1
    ) {
      return false;
    } else return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid() && isPhoneValid() && isEmailValid()) {
// take form field state, build newWarehouse object
      const updateWarehouse = {
        warehouse_name: nameState,
        address: addressState,
        city: cityState,
        country: countryState,
        contact_name: contactState,
        contact_position: positionState,
        contact_phone: phoneState,
        contact_email: emailState,
      };
      console.log(params.id)
      // send form to API
      // TODO: this is post rather than put patch, will need to spread new warehouse into warehouses.
      axios.patch(`http://localhost:8080/warehouses/${params.id}`, updateWarehouse).then((response) => {
        console.log(response.data);
        event.target.reset();
      });
      alert("success");
    } else {
      console.log("form error");
    }
  };
  return (
    <div className="warehouse__wrapper">
      <div className="warehouse__header">
        <a>
          <div className="warehouse__back"></div>
        </a>
        <h2 className="warehouse__edit">Edit Warehouse</h2>
      </div>
      <form onSubmit={handleSubmit} className="warehouse__form">
        <div className="warehouse__form-container">
          <div className="warehouse__form-top">
            <h3 className="warehouse__form-subhead">Warehouse Details</h3>
            <label className="warehouse__form-label" htmlFor="warehouseName">
              Warehouse Name
            </label>
            <input
              type="text"
              placeholder="Warehouse Name"
              className="warehouse__input"
              name="warehouseName"
              onChange={handleChangeName}
              value={nameState}
            />
            <label className="warehouse__form-label" htmlFor="warehouseAddress">
              Warehouse Address
            </label>
            <input
              type="text"
              placeholder="Address"
              className="warehouse__input"
              name="warehouseAddress"
              onChange={handleChangeAddress}
              value={addressState}
            />
            <label className="warehouse__form-label" htmlFor="warehouseCity">
              City
            </label>
            <input
              type="text"
              placeholder="City"
              className="warehouse__input"
              name="warehouseCity"
              onChange={handleChangeCity}
              value={cityState}
            />
            <label className="warehouse__form-label" htmlFor="">
              Country
            </label>
            <input
              type="text"
              placeholder="Country"
              className="warehouse__input"
              name="warehouseCountry"
              onChange={handleChangeCountry}
              value={countryState}
            />
          </div>
          <div className="warehouse__form-bottom">
            <h3 className="warehouse__form-subhead">Contact Details</h3>
            <label className="warehouse__form-label" htmlFor="warehouseContact">
              Contact Name
            </label>
            <input
              type="text"
              placeholder="Contact Name"
              className="warehouse__input"
              name="warehouseContact"
              onChange={handleChangeContact}
              value={contactState}
            />
            <label
              className="warehouse__form-label"
              htmlFor="warehousePosition"
            >
              Position
            </label>
            <input
              type="text"
              placeholder="Position"
              className="warehouse__input"
              name="warehousePosition"
              onChange={handleChangePosition}
              value={positionState}
            />
            <label className="warehouse__form-label" htmlFor="warehousePhone">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="warehouse__input"
              name="warehousePhone"
              onChange={handleChangePhone}
              value={phoneState}
            />
            <label className="warehouse__form-label" htmlFor="warehouseEmail">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="warehouse__input"
              name="warehouseEmail"
              onChange={handleChangeEmail}
              value={emailState}
            />
          </div>
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
  );
};

export default EditWarehouse;
