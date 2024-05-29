import axios from "axios";
import { APIConfig, Routes } from "../Config/config";

export const fetchProjects = async (userId) => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const res = await axios.get(
    `${APIConfig.URL}${Routes.projects}?userId=${userId}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res;
};
