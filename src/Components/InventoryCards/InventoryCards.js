/* ----------------- SCSS IMPORTS ----------------- */
import "./InventoryCards.scss";
/* ----------------- ASSET IMPORTS ----------------- */
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit2-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
/* ----------------- COMPONENT IMPORTS ----------------- */
import InventoryDeleteModal from "../Modals-inventory/InventoryDeleteModal";
/* ----------------- REACT IMPORTS ----------------- */
import { Link } from "react-router-dom";
import { useState } from "react";

const InventoryCards = ({ inventories, searchTerm }) => {
  // States
  const [openInventoryModal, setOpenInventoryModal] = useState(false);
  const [inventoryID, setInventoryID] = useState("");
  const [inventoryName, setInventoryName] = useState("");

  const [deleteName, setDeleteName] = useState("");
  const [deleteID, setDeleteID] = useState("");

  return (
    <>
      {inventories
        .filter((inventory) => {
          if (searchTerm === "") {
            return inventory;
          } else if (
            inventory.item_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return inventory;
          }
        })
        .map((inventory) => (
          <section className="inventory-cards-wrap" key={inventory.id}>
            <div className="inventory-cards__inventory-item-wrap">
              <div className="inventory-cards__inventory-item-title">
                INVENTORY ITEM
              </div>
              <Link to={`/inventories/item/${inventory.id}`}>
                <p className="inventory-cards__inventory-item">
                  {inventory.item_name}
                  <img
                    src={chevronIcon}
                    alt="chevron icon right"
                    className="inventory-cards__inventory-item-icon inventory-cards--hover"
                  />
                </p>
              </Link>
            </div>
            <div className="inventory-cards__category-wrap">
              <div className="inventory-cards__category-title">CATEGORY</div>
              {inventory.status === "In Stock" ? (
                <p className="inventory-cards__status">{inventory.status}</p>
              ) : (
                <p className="inventory-cards__status inventory-cards__status--outofstock">
                  {inventory.status}
                </p>
              )}
            </div>
            <div className="inventory-cards__status-wrap">
              <div className="inventory-cards__status-title">STATUS</div>
              <div className="inventory-cards__category">
                {inventory.category}
              </div>
            </div>
            <div className="inventory-cards__qty-wrap">
              <div className="inventory-cards__qty-title">QTY </div>
              <div className="inventory-cards__qty">{inventory.quantity}</div>
            </div>
            <div className="inventory-cards__warehouse-wrap">
              <div className="inventory-cards__warehouse-title">WAREHOUSE</div>
              <div className="inventory-cards__warehouse">
                {inventory.warehouse_name}
              </div>
            </div>

            <div className="inventory-cards__icons-wrap">
              <img
                src={delIcon}
                alt={inventory.item_name}
                id={inventory.id}
                className="inventory-cards__icons-del"
                onClick={(event) => {
                  console.log(event);
                  setDeleteName(event.target.alt);
                  setDeleteID(event.target.id);
                  // setInventoryID(inventory.id);
                  // setInventoryName(inventory.item_name);
                  setOpenInventoryModal(true);
                }}
              />
              <Link to={`/inventories/item/edit/${inventory.id}`}>
                <img
                  src={editIcon}
                  alt="edit-icon"
                  className="inventory-cards__icons-edit"
                />
              </Link>
            </div>
          </section>
        ))}
      <InventoryDeleteModal
        open={openInventoryModal}
        onClose={() => {
          setOpenInventoryModal(false);
        }}
        inventoryID={deleteID}
        inventoryName={deleteName}
      />
    </>
  );
};

export default InventoryCards;
