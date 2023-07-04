import { getRefreshToken } from "../endpoints/users";

export const isAuth = async() => {
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");
    if(!refreshToken || !accessToken){
        return false;
    }
    try {
      // Check if the access token is valid by refreshing it
      const response = await getRefreshToken(refreshToken);
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken",data.refresh);
        return true; // User is authenticated
      }
    }catch(error){
      if (error.response && error.response.status === 401) {
        // Token is blacklisted or invalid
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return false;
      }
      console.error(error);
      return false; // User is not authenticated
    }
}