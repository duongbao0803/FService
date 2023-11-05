import axios from "axios";
import config from "../utils/cus-axios";

const refreshData = () => {
  let accesstoken = localStorage.getItem("accesstoken");
  let config = {};
  if (accesstoken !== null)
    config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
  return config;
};

const Launch = () => {
  const refreshedConfig = refreshData();
  return config.get("/api/authentication/Launch", refreshedConfig);
};

const fetchUser = (page) => {
  const refreshedConfig = refreshData();
  return config.get(
    `/api/accounts?PageNumber=${page}&PageSize=10`,
    refreshedConfig
  );
};

const loginAPI = (email, password) => {
  // let dmm = {};
  // dmm = refreshdata();
  return config.post("/api/authentication/SignIn", { email, password });
};

const sendRefreshToken = () => {
  return config.post("/api/authentication/Refresh-token");
};

const signUp = (userData) => {
  return config.post("/api/authentication/SignUp", userData);
};

const editUser = (id) => {
  return config.put(`/api/accounts/${id}`);
};

const deleteUser = (id) => {
  return config.delete(`/api/accounts/${id}`);
};

const Order = (data) => {
  const refreshedConfig = refreshData();
  return config.post("/api/orders", data, refreshedConfig);
};

// const getApartment = (data) => {
//   const refreshedConfig = refreshdata();
//   return config.post("/api/orders", data, refreshedConfig);
// };

export {
  fetchUser,
  loginAPI,
  signUp,
  editUser,
  deleteUser,
  sendRefreshToken,
  Launch,
  Order,
};
