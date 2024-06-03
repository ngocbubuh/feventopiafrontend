import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import UseRefreshToken from "../hooks/useRefreshToken";

// Create an Axios instance named 'config'
const config = axios.create({
  baseURL: "https://feventopia.azurewebsites.net", // Set your base URL here
  headers: {
    // Set the Authorization header with the access token from local storage
    Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
  },
});
const refresh = UseRefreshToken();
config.interceptors.response.use(
  function (response) {
    return response ? response : { status: response.status };
  },
  async function (error) {
    let res = {};
    const eRes = error.response;

    if (eRes) {
      res.data = eRes.data;
      res.status = eRes.status;
      res.message = eRes.data.message;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }

    const prevRequest = error.config;
    if (eRes?.status === 401 && !prevRequest.sent) {
      prevRequest.sent = true;
      try {
        const newAccessToken = await refresh();
        if (newAccessToken) {
          console.log("check new token", newAccessToken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return config(prevRequest);
        }
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
      }
    }

    return res;
  }
);

export default config;