import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export { api, config };
