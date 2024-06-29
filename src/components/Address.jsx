import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Address = () => {
  const { shippingAddress, userAddress } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  });

  const onchangehandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const { fullName, address, city, state, country, pincode, phoneNumber } =
    formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await shippingAddress(
      fullName,
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber
    );
    setFormData({
      fullName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      phoneNumber: "",
    });
    console.log(result);
    if (result?.success) {
      navigate("/checkout");
    }
  };
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <div
          className="container my-5 p-4"
          style={{
            border: "2px solid yellow",
            borderRadius: "10px",
          }}
        >
          <h1 className="text-center">Shipping Address</h1>
          <form className="my-3" onSubmit={submitHandler}>
            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  id="exampleInputEmail13"
                  aria-describedby="emailHelp"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onchangehandler}
                />
              </div>
              <div className="mb-3 col-md-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="country"
                  value={formData.country}
                  onChange={onchangehandler}
                />
              </div>
              <div className="mb-3 col-md-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  id="exampleInputPassword1"
                  name="state"
                  value={formData.state}
                  onChange={onchangehandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  id="exampleInputEmail13"
                  aria-describedby="emailHelp"
                  name="city"
                  value={formData.city}
                  onChange={onchangehandler}
                />
              </div>
              <div className="mb-3 col-md-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Pin-Code
                </label>
                <input
                  type="number"
                  className="form-control bg-dark text-light"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="pincode"
                  value={formData.pincode}
                  onChange={onchangehandler}
                />
              </div>
              <div className="mb-3 col-md-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control bg-dark text-light"
                  id="exampleInputPassword1"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={onchangehandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Address/nearBy
                </label>
                <textarea
                  type="text"
                  className="form-control bg-dark text-light"
                  id="exampleInputPassword1"
                  name="address"
                  value={formData.address}
                  onChange={onchangehandler}
                />
              </div>
            </div>

            <div className="d-grid col-6 mx-auto my-3">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ fontWeight: "bold" }}
              >
                Submit
              </button>
            </div>
          </form>
          {userAddress && (
            <div className="d-grid col-6 mx-auto my-3">
              <button
                style={{ fontWeight: "bold" }}
                type="submit"
                className="btn btn-warning"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Use Old Address
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Address;
