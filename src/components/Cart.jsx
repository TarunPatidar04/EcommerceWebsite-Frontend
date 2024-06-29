import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, decreaseQty, addToCart, removeFromCart, clearCart } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let qty = 0;
    let price = 0;

    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setQty(qty);
    setPrice(price);
  }, [cart]);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {cart?.items?.length > 0 && (
          <div className="my-5 text-center">
            <button
              className="btn btn-info mx-3"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Total Qty :-{qty}
            </button>
            <button
              className="btn btn-info mx-3"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Total Price :-{price}
            </button>
          </div>
        )}
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
                    onClick={() => {
                      decreaseQty(product?.productId, 1);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-info mx-3"
                    style={{ fontWeight: "bold" }}
                    onClick={() => {
                      addToCart(
                        product?.productId,
                        product?.title,
                        product?.price / product.qty,
                        1,
                        product.imgSrc
                      );
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                    style={{ fontWeight: "bold" }}
                    onClick={() => {
                      if (confirm("do you really want to delete this"))
                        removeFromCart(product?.productId);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container text-center">
          {cart?.items?.length > 0 ? (
            <>
              <button
                onClick={() => navigate("/shipping")}
                className="btn btn-warning mx-3 "
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                checkout
              </button>
              <button
                className="btn btn-danger mx-3"
                style={{ fontWeight: "bold", fontSize: "18px" }}
                onClick={() => {
                  if (confirm("tu kyu item delete kr raha hai... "))
                    clearCart();
                }}
              >
                clear cart
              </button>
            </>
          ) : (
            <Link to="/">
              <button className="py-2 btn btn-warning">
                Saman to lele bhai
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
