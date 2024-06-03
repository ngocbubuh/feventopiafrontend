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

//   const Launch = () => {
//     const refreshedConfig = refreshData();
//     return config.get("/api/authentication/Launch", refreshedConfig);
//   };

//   const fetchUser = (page) => {
//     const refreshedConfig = refreshData();
//     return config.get(
//       `/api/accounts?PageNumber=${page}&PageSize=10`,
//       refreshedConfig
//     );
//   };

const signInAPI = ({ emailOrUsername, password }) => {
    const refreshedConfig = refreshData();
    return config.post(
        "/auth/SignIn",
        { emailOrUsername, password },
        refreshedConfig
    );
}
const sendRefreshToken = (data) => {
    const refreshedConfig = refreshData();
    return config.post(
      "/api/authentication/Refresh-token",
      data,
      refreshedConfig
    );
  };

export {

    signInAPI,
    sendRefreshToken

  };