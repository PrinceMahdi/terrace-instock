/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import EditWarehouse from "./Components/Edit-warehouse/EditWarehouse";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";
import WarehouseDeleteModal from "./Components/Modals/WarehouseDeleteModal";
import InventoryDeleteModal from "./Components/Modals/InventoryDeleteModal";
import Footer from "./Components/Footer/Footer";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouses/edit/:id" element={<EditWarehouse />} />
        {/* Add routing for warehouse add item /warehouse/add */}
        <Route
          path="/warehouses/delete/:id"
          element={<WarehouseDeleteModal />}
        />
        {/* Add routing for inventory list /inventories */}
        <Route
          path="/inventories/delete/:id"
          element={<InventoryDeleteModal />}
        />
        <Route
          path="/inventories/item/:id"
          element={<InventoryItemDetails />}
        />
        <Route
          path="/inventories/item/edit/:id"
          element={<EditInventoryItem />}
        />
        <Route path="/inventories/add" element={<AddInventoryItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
