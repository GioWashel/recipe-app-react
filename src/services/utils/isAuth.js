import { getRefreshToken } from "../endpoints/users";

export const isAuth = async() => {
    const refreshToken = localStorage.getItem("refreshToken");
    try {
        const response = await getRefreshToken(refreshToken);
        if(response.status === 200){
            const data = response.data   
            localStorage.setItem("accessToken",data.access);
            return true;
        }
    }catch(error){
        if (error.response && error.response.status === 401) {
            // Token is blacklisted or invalid
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            return false;
        }
        console.error(error);
        return false;
    }
}