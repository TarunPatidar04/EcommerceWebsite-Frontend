import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <div className="left">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h3>Ecommerce</h3>
            </Link>
          </div>
          <div className="search_bar">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search Products..." />
          </div>
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
