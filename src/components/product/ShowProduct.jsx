import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const ShowProduct = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <h1>Show Product</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row container d-flex justify-content-center align-items-center">
          {products?.map((product) => (
            <div
              key={product._id}
              className=" my-3 col-md-4 d-flex justify-content-center align-items-center"
            >
              <div
                className="card bg-dark text-light text-center"
                style={{ width: "18rem" }}
              >
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="my-3">
                    <button href="#" className="btn btn-primary mx-3">
                      {product.price} {"₹"}
                    </button>
                    <button href="#" className="btn btn-warning">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
