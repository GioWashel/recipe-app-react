import {get, post} from '../utils/request';

export const register = (data) => {
    const route = "/register/";
    return post(route, data)
}

export const login = async (data) => {
    const route = "/token/";
    try{
        const response = await post(route,data);
        if(response.status === 200){
            const {refresh, access} = response.data;
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            return response.status;
        }
    }catch(error) {
        console.error("ERROR IN LOGIN", error);
        throw error;
    }
}

export const getHistory = async () => {
    const route = "/history/";
    return get(route);
}

export const getRefreshToken = async (refreshToken) => {
    const route = "/token/refresh/";
    const data =JSON.stringify({refresh : refreshToken });
    return post(route, data);
}

export const getProfile = async () => {
    const route = "/profile/";
    return get(route);
}