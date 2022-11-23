/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";
import WarehousedeleteModal from "./Components/Modals/WarehouseDeleteModal";
import InventoryDeleteModal from "./Components/Modals/InventoryDeleteModal";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <WarehouseDetails />
      {/* <WarehousedeleteModal /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Footer />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
        <Route
          path="/inventory/details/:id"
          element={<InventoryItemDetails />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
