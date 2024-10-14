import axios from "axios";

export const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});
