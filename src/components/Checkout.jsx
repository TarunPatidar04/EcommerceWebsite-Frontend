import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import TableProduct from "./TableProduct";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, userAddress, url, user, clearCart } = useContext(AppContext);
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

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(`${url}/payment/checkout`, {
        amount: price,
        qty: qty,
        cartItems: cart?.items,
        userShipping: userAddress,
        userId: user._id,
      });
      // console.log("orderResponse", orderResponse);

      const { orderId, amount: orderAmount } = orderResponse.data;

      var options = {
        key: "rzp_test_q1OyBsAbEk77IE",
        amount: orderAmount * 100,
        currency: "INR",
        name: "Tarun Patidar",
        description: "Tarun Patidar",
        order_id: orderId,
        handler: async function (response) {
          // console.log("response", response);
          const paymentData = {
            orderId: response.razorpay_order_id,
            paymenId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            amount: orderAmount,
            orderItems: cart?.items,
            userId: user._id,
            userShipping: userAddress,
          };
          const api = await axios.post(
            `${url}/payment/verify-payment`,
            paymentData
          );
          console.log("api", api);

          if (api.data.success) {
            clearCart();
            navigate(`/orderconfirmation`);
          }
        },
        prefill: {
          name: "Tarun Patidar",
          email: "tarunpatidar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Vijay nagar Indore",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzpay = new window.Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.log(error);
    }
  };

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
            onClick={() => {
              handlePayment();
            }}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
