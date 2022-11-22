import "./WarehouseCards.scss";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const WarehouseCards = ({ data }) => {
  return (
    <>
      <div className="warehouse-cards__warehouse-title">WAREHOUSE</div>
      <div className="warehouse-cards__warehouse">{data.warehouse_name}</div>

      <div className="warehouse-cards__contact-name">CONTACT NAME</div>
      <div className="warehouse-cards__address">ADDRESS</div>
      <div className="warehouse-cards__contact-info-wrap">
        <div className="warehouse-cards__contact-info-phone"></div>
        <div className="warehouse-cards__contact-info-email"></div>
      </div>
      <img src={delIcon} alt="delete-icon" srcset="" />
      <img src={editIcon} alt="edit-icon" srcset="" />
    </>
  );
};

export default WarehouseCards;
