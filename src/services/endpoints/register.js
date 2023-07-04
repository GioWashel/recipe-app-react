import { get, post, put, del } from '../utils/request';
import axios from 'axios';

export const register = (data) => {
    const route = "/register/";
    return post(route, data)
}


export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim()
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break
            }
        }
    }
    return cookieValue
}


// const sendLogin = axios.create({
//     baseURL: "http://localhost:8000",
//     timeout: 5000,
//     headers: {
//         "Content-Type": "application/json",
//     },
// })

// async function postLogin(endpoint, data) {
//     try {
//         const response = await sendLogin.post(endpoint, data);
//         return response.status;
//     } catch (error) {
//         console.error("Post request error ", error);
//         throw error;
//     }
// };


// export const login = (data) => {
//     const route = '/login/';
//     return postLogin(route, data)
// } 

// export const loginFunc = async (csrftoken, data) => {
//     const response = await axios.post({
//         url: "http://localhost:8000/login/",
//         timeout: 5000,
//         headers: {
//             "Content-Type": "application/json",
//             // "X-CSRFToken": csrftoken,
//         },
//         data: data 
//     })
//     return response.status
// }