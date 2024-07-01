import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import TableProduct from "./TableProduct";

const Checkout = () => {
  const { cart, userAddress } = useContext(AppContext);
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
        <div>
          <div className="container">
            <h1 className="text-center my-3">Order Summery</h1>

            <table className="table table-bordered border-primary table-dark">
              <thead className="bg-dark">
                <tr>
                  <th scope="col">Product Details</th>
                  <th scope="col">Shipping Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{<TableProduct cart={cart} />}</th>
                  <td>
                    <ul>
                      <li>Name : {userAddress?.fullName} </li>
                      <li>Phone : {userAddress?.phoneNumber} </li>
                      <li>Country : {userAddress?.country} </li>
                      <li>state : {userAddress?.state} </li>
                      <li>pinCode : {userAddress?.pincode} </li>
                      <li>Address : {userAddress?.address} </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="container text-center">
          <button
            className="btn btn-secondary ml-3"
            style={{ fontWeight: "bold" }}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
