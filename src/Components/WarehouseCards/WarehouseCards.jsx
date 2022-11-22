import "./WarehouseCards.scss";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const WarehouseCards = ({ warehouses }) => {
  //   console.log(warehouses);
  return warehouses.map((warehouse) => {
    console.log(warehouse);
    return (
      <section className="warehouse-cards-wrap" key={warehouse.id}>
        <div className="warehouse-cards__warehouse-title">WAREHOUSE</div>
        <div className="warehouse-cards__warehouse">
          {warehouse.warehouse_name}
        </div>
        <div className="warehouse-cards__contact-name-wrap">
          <div className="warehouse-cards__contact-name-title">
            CONTACT NAME
          </div>
          <div className="warehouse-cards__contact-name">
            {warehouse.contact_name}
          </div>
        </div>
        <div className="warehouse-cards-address-wrap">
          <div className="warehouse-cards__address-title">ADDRESS</div>
          <div className="warehouse-cards__address">
            {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
          </div>
        </div>
        <div className="warehouse-cards__contact-info-wrap">
          <div className="warehouse-cards__contact-info-phone">
            {warehouse.contact_phone}
          </div>
          <div className="warehouse-cards__contact-info-email">
            {warehouse.contact_email}
          </div>
        </div>
        <img src={delIcon} alt="delete-icon" />
        <img src={editIcon} alt="edit-icon" />
      </section>
    );
  });
};

export default WarehouseCards;
