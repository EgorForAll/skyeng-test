import axios from "axios";

const BACKEND_URL = `https://api.github.com/search/`;
const REQUEST_TIMEOUT = 1000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    if (response.status !== 200) {
      console.log("ошибка");
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
