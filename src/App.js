/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import EditWarehouse from "./Components/Edit-warehouse/EditWarehouse";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import InventoryDeleteModal from "./Components/Modals/InventoryDeleteModal";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import PostWarehouse from "./Components/Post-warehouse/PostWarehouse";
import WarehousedeleteModal from "./Components/Modals/WarehouseDeleteModal";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";
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
        <Route path="/warehouses/add" element={<PostWarehouse />} />
        <Route
          path="/warehouses/delete/:id"
          element={<WarehousedeleteModal />}
        />
        <Route
          path="/iventories/delete/:id"
          element={<InventoryDeleteModal />}
        />
        <Route path="/inventory/item/:id" element={<InventoryItemDetails />} />
        <Route
          path="/inventories/item/edit/id"
          element={<EditInventoryItem />}
        />
        <Route path="/inventories/add" element={<AddInventoryItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
