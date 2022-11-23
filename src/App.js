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
  
      {/* <WarehousedeleteModal /> */}

      <Routes>
        <Route path='/:id' element={<WarehouseDetails />} />
        <Route path="/edit" element={<EditWarehouse />} />
        <Route path="/warehouses/post" element={<PostWarehouse />} />
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
