import axios from "axios";

export const httpApi = axios.create({
  //   baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "http://localhost:5111/v1",
});
