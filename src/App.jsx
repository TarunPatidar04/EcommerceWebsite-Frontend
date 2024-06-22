import React, { useContext } from "react";
import ShowProduct from "./components/product/ShowProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
