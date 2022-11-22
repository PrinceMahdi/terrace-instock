/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/inventory/details/:id"
          element={<InventoryItemDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
