/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import EditWarehouse from "./Components/Edit-warehouse/EditWarehouse";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/edit-warehouse" element={<EditWarehouse />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
