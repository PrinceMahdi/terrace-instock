import "./WarehouseCards.scss";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit2-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link, useParams } from "react-router-dom";
// import { Params } from "react-router-dom";

const WarehouseCards = ({ warehouses }) => {
  // const params = useParams;
  return warehouses.map((warehouse) => (
    <section className="warehouse-cards-wrap" key={warehouse.id}>
      <div className="warehouse-cards__warehouse-name-wrap">
        <div className="warehouse-cards__warehouse-name-title">WAREHOUSE</div>
        <Link to={`/:id`}>
          <p className="warehouse-cards__warehouse-name">
            {warehouse.warehouse_name}{" "}
            <img
              src={chevronIcon}
              alt="chevron icon right"
              className="warehouse-cards_warehouse-name-icon"
            />
          </p>
        </Link>
      </div>
      <div className="warehouse-cards__contact-name-wrap">
        <div className="warehouse-cards__contact-name-title">CONTACT NAME</div>
        <div className="warehouse-cards__contact-name">
          {warehouse.contact_name}
        </div>
      </div>
      <div className="warehouse-cards__address-wrap">
        <div className="warehouse-cards__address-title">ADDRESS</div>
        <div className="warehouse-cards__address">
          {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
        </div>
      </div>
      <div className="warehouse-cards__contact-info-wrap">
        <div className="warehouse-cards__contact-info-title">
          CONTACT INFORMATION
        </div>
        <div className="warehouse-cards__contact-info-phone">
          {warehouse.contact_phone}
        </div>
        <div className="warehouse-cards__contact-info-email">
          {warehouse.contact_email}
        </div>
      </div>
      <div className="warehouse-cards__icons-wrap">
        <img
          src={delIcon}
          alt="delete-icon"
          className="warehouse-cards__icons-del"
        />
        <img
          src={editIcon}
          alt="edit-icon"
          className="warehouse-cards__icons-edit"
        />
      </div>
    </section>
  ));
};

export default WarehouseCards;
