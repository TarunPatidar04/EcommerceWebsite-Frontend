import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const OrderConfirmation = () => {
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);
  // console.log("latest order",latestOrder)
  return (
    <div style={{ marginTop: "110px" }}>
      <div>
        <div className="container my-5">
          <h1 className="text-center">Your order has been confirmed</h1>
          <h3 className="text-center">It will delivered soon</h3>
        </div>
        <div>
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
