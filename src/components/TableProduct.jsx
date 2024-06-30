import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const TableProduct = ({ cart }) => {
  const { decreaseQty, addToCart, removeFromCart, clearCart } =
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
      <table className="table table-dark table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Product Img</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Qty++</th>
            <th scope="col">Qty--</th>
            <th scope="col">remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.items?.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  width="50"
                  height="50"
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.qty}</td>
              <td>
                <span
                  className="material-symbols-outlined"
                  style={{ cursor: "pointer" }}
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
                  add_circle
                </span>
              </td>
              <td>
                <span
                  className="material-symbols-outlined"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    decreaseQty(product?.productId, 1);
                  }}
                >
                  do_not_disturb_on
                </span>
              </td>
              <td>
                <span
                  className="material-symbols-outlined"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                      removeFromCart(product?.productId);
                  }}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <button
                className="btn btn-primary"
                style={{ fontWeight: "bold" }}
              >
                Total
              </button>
            </td>
            <td>
              <button
                className="btn btn-warning"
                style={{ fontWeight: "bold" }}
              >
                {price}
              </button>
            </td>
            <td>
              {" "}
              <button className="btn btn-info" style={{ fontWeight: "bold" }}>
                {qty}
              </button>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableProduct;
