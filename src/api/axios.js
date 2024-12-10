import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

export default axios;
