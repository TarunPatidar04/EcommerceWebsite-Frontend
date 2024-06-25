import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const { setFilterData, products, logout, isAuthenticated } =
    useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (cat) => {
    setFilterData(
      products.filter(
        (data) => data.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };
  const filterByPrice = (price) => {
    setFilterData(products.filter((data) => data.price > price));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div>
      <style jsx="true">{`
        .nav {
          position: fixed;
        }
      `}</style>
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
            {isAuthenticated && (
              <>
                <button className="btn btn-warning mx-3">cart</button>
                <button className="btn btn-warning mx-3">profile</button>
                <button
                  className="btn btn-danger mx-3"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  logout
                </button>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Link to="/login">
                  <button className="btn btn-secondary mx-3">login</button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-info mx-3">register</button>
                </Link>
              </>
            )}
          </div>
        </div>
        {location.pathname === "/" && (
          <div className="sub_bar">
            <div className="items" onClick={() => setFilterData(products)}>
              No Filter
            </div>
            <div className="items" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterByCategory("laptops")}>
              Laptops
            </div>
            <div className="items" onClick={() => filterByCategory("cameras")}>
              Cameras
            </div>
            <div
              className="items"
              onClick={() => filterByCategory("headphones")}
            >
              Headphones
            </div>
            <div className="items" onClick={() => filterByPrice("headphones")}>
              15999
            </div>
            <div className="items" onClick={() => filterByPrice(15999)}>
              25999
            </div>
            <div className="items" onClick={() => filterByPrice(45999)}>
              45999
            </div>
            <div className="items" onClick={() => filterByPrice(65999)}>
              65999
            </div>
            <div className="items" onClick={() => filterByPrice(85999)}>
              85999
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
