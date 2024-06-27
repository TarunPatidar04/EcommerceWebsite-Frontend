import { useContext } from "react";
import AppContext from "../context/AppContext";

const Cart = () => {
  const { cart } = useContext(AppContext);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div>
          {cart?.items?.map((product) => (
            <div
              key={product._id}
              className="container p-3 bg-dark my-5 text-center"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div className="cart_img">
                  <img
                    src={product.imgSrc}
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="cart_des">
                  <h2>{product.title}</h2>
                  <h4>{product.price}</h4>
                  <h4>{product.qty}</h4>
                </div>
                <div className="cart_actions">
                  <button
                    className="btn btn-warning mx-3"
                    style={{ fontWeight: "bold" }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-info mx-3"
                    style={{ fontWeight: "bold" }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                    style={{ fontWeight: "bold" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
