import axios from "axios";

export const request = axios.create({
  baseURL: `https://piskenttum.toshvil.uz/${
    localStorage.getItem("lng") || "uz"
  }`,
});
