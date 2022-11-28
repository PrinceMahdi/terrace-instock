/* ---------------- SCSS IMPORTS ---------------- */
import "./EditWarehouse.scss";

/* ---------------- REACT IMPORTS ---------------- */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditWarehouse = () => {
  const navigate = useNavigate();
  // track state for form fields
  const [nameState, setNameState] = useState("");
  const [addressState, setAddressState] = useState("");
  const [cityState, setCityState] = useState("");
  const [countryState, setCountryState] = useState("");
  const [contactState, setContactState] = useState("");
  const [positionState, setPositionState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [messageState, setMessageState] = useState("");

  const params = useParams();

  /**
   call server for warehouse data based on id in url
   set data from response to form
   *  */
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${params.id}`)
      .then((response) => {
        const {
          warehouse_name,
          address,
          city,
          country,
          contact_name,
          contact_position,
          contact_phone,
          contact_email,
        } = response.data;

        setNameState(warehouse_name);
        setAddressState(address);
        setCityState(city);
        setCountryState(country);
        setContactState(contact_name);
        setPositionState(contact_position);
        setPhoneState(contact_phone);
        setEmailState(contact_email);
      });
  }, []);

  // check if phone valid
  const isPhoneValid = () => {
    if (
      phoneState.search(
        /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/g
      ) > -1
    ) {
      return true;
    } else {
      return false;
    }
  };

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );
  const isEmailValid = () => {
    if (emailState.match(emailRegex)) {
      return true;
    } else {
      return false;
    }
  };

  //track and set form content via state
  const handleChangeName = (event) => {
    // set name
    setNameState(event.target.value);
    // if name is empty add error
    if (nameState.length < 1) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      //  error class: warehouse__input--error
    }
  };
  const handleChangeAddress = (event) => {
    setAddressState(event.target.value);
    // if name is empty add error
    if (addressState.length < 1) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      //  error class: warehouse__input--error
    }
  };
  const handleChangeCity = (event) => {
    setCityState(event.target.value);
    // if name is empty add error
    if (cityState.length < 1) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      //  error class: warehouse__input--error
    }
  };
  const handleChangeCountry = (event) => {
    setCountryState(event.target.value);
    // if name is empty add error
    if (countryState.length < 1) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      //  error class: warehouse__input--error
    }
  };
  const handleChangeContact = (event) => {
    setContactState(event.target.value);
    // if name is empty add error
    if (contactState.length < 1) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      //  error class: warehouse__input--error
    }
  };
  const handleChangePosition = (event) => {
    setPositionState(event.target.value);
    // if name is empty add error
    if (positionState.length < 1) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      //  error class: warehouse__input--error
    }
  };
  const handleChangePhone = (event) => {
    setPhoneState(event.target.value);
    // if name is empty add error
    if (phoneState.length < 7) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
      setMessageState(
        "please provide a valid phone number eg: +1 (555) 555-5555"
      );
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      setMessageState('')
      //  error class: warehouse__input--error
    }
  };
  const handleChangeEmail = (event) => {
    setEmailState(event.target.value);
    // if name is empty add error
    if (!emailState.match(emailRegex)) {
      // if field has content remove error
      event.currentTarget.classList.add("warehouse__input--error");
      setMessageState("please provide a valid email eg: email@email.com");
    } else {
      event.currentTarget.classList.remove("warehouse__input--error");
      setMessageState('')
      //  error class: warehouse__input--error
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

      // send form to API
      axios
        .put(`http://localhost:8080/warehouses/${params.id}`, updateWarehouse)
        .then((_response) => {
          event.target.reset();
        });
      setMessageState("success, returning to warehouse list in 5 seconds");
      setTimeout(() => {
        navigate("/warehouses");
      }, 5000);
    } else {
      setMessageState("All fields required");
    }
  };
  return (
    <div className="warehouse__wrapper">
      <div className="warehouse__header">
        <Link to="/warehouses">
          <div className="warehouse__back"></div>
        </Link>
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
          <div className="warehouse__message">{messageState}</div>
          <Link to="/warehouses" className="warehouse__cancel-button">
            <button
              type="button"
              className="warehouse__button warehouse__button--secondary"
            >
              Cancel
            </button>
          </Link>
          <button className="warehouse__button warehouse__button--primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditWarehouse;
