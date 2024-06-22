import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const ShowProduct = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <h1>Show Product</h1>
      {products?.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </>
  );
};

export default ShowProduct;
