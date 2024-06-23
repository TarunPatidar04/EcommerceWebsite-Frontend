import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <div>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <div className="left">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h3>Ecommerce</h3>
            </Link>
          </div>
          <form className="search_bar" onSubmit={submitHandler}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </form>
          <div className="right">
            <button className="btn btn-warning mx-3">cart</button>
            <button className="btn btn-warning mx-3">profile</button>
            <button className="btn btn-warning mx-3">login</button>
            <button className="btn btn-warning mx-3">regsiter</button>
            <button className="btn btn-warning mx-3">logout</button>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
