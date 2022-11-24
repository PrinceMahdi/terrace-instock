/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import EditWarehouse from "./Components/Edit-warehouse/EditWarehouse";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Footer from "./components/Footer/Footer";
import WarehousedeleteModal from "./Components/Modals/WarehouseDeleteModal";
import InventoryDeleteModal from "./Components/Modals/InventoryDeleteModal";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <WarehouseDetails /> */}
      {/* <WarehousedeleteModal /> */}

      <Routes>
        <Route path="/edit-warehouse" element={<EditWarehouse />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Footer />} />
        <Route
          path="/inventory/details/:id"
          element={<InventoryItemDetails />}
        />
        <Route path="/inventory/item/:id" element={<EditInventoryItem />} />
        <Route path="/add/inventory/:id" element={<AddInventoryItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
