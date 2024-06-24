import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangehandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await register(name, email, password);
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    if (result.success) {
      navigate("/login");
    }
  };
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <div
          className="container my-5 p-4"
          style={{
            width: "600px",
            border: "2px solid yellow",
            borderRadius: "10px",
          }}
        >
          <h1 className="text-center">User register</h1>
          <form className="my-3" onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail13"
                aria-describedby="emailHelp"
                name="name"
                value={formData.name}
                onChange={onchangehandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={formData.email}
                onChange={onchangehandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={formData.password}
                onChange={onchangehandler}
              />
            </div>
            <div className="d-grid col-6 mx-auto my-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
