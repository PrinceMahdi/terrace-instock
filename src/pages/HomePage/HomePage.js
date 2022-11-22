/* ---------------- SCSS IMPORTS ---------------- */
import InventoryItemDetails from "../InventoryItemDetails/InventoryItemDetails";
import "./HomePage.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import WarehouseList from "../../Components/WarehouseList/WarehouseList";

const HomePage = () => {
  return (
    <>

      <InventoryItemDetails />

      <WarehouseList />

    </>
  );
};

export default HomePage;
