/* ------------------ SCSS IMPORTS ------------------ */
import "./App.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import EditWarehouse from "./components/Edit-warehouse/EditWarehouse";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <EditWarehouse />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
