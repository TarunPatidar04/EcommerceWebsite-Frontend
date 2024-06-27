import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const AppState = (props) => {
  const url = "http://localhost:4000/api";
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [user, setUser] = useState();

  //Get all products
  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/all`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setProducts(api.data.products);
      setFilterData(api.data.products);
    };
    userProfile();
    fetchProducts();
  }, [token]);

  useEffect(() => {
    let istoken = localStorage.getItem("token");
    //  console.log(lstoken)
    if (istoken) {
      setToken(istoken);
      setIsAuthenticated(true);
    }
  });

  //Register user
  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    // alert(api.data.message);
    // console.log("User Register", api);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return api.data;
  };

  //Login user
  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    // console.log("user Login", api.data);
    setToken(api.data.token);
    localStorage.setItem("token", api.data.token);
    setIsAuthenticated(true);
    return api.data;
  };

  //Logout User
  const logout = () => {
    setIsAuthenticated(false);
    setToken(" ");
    localStorage.removeItem("token");
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  //User Profile
  const userProfile = async () => {
    const api = await axios.get(`${url}/user/profile`, {
      headers: {
        "Content-Type": "application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    // console.log(api.data)
    setUser(api.data.user);
  };
  return (
    <div>
      <AppContext.Provider
        value={{
          products,
          register,
          login,
          url,
          isAuthenticated,
          setIsAuthenticated,
          filterData,
          setFilterData,
          token,
          logout,
          user,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;
