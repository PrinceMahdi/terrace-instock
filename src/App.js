/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehousedeleteModal from "./components/Modals/WarehouseDeleteModal";
import InventoryDeleteModal from "./components/Modals/InventoryDeleteModal";

/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <WarehouseDetails />
      <WarehousedeleteModal />

      <Footer />

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Footer />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
