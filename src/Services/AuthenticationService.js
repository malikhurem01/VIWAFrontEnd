import axios from "axios";
import { APIConfig, Routes } from "../Config/config";

export const login = (data) => {
  return axios.post(`${APIConfig.URL}${Routes.login}`, data);
};

export const register = (data) => {
  return axios.post(`${APIConfig.URL}${Routes.register}`, data);
};

export const current = () => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  return axios.get(`${APIConfig.URL}${Routes.current}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
