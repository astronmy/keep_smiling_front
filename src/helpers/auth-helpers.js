import axios from "axios";

const KEY_TOKEN = "KEEP_SMILE_TKN";

export function setToken(token) {
    localStorage.setItem(KEY_TOKEN, token);
}

export function getToken() {
    localStorage.getToken(KEY_TOKEN);
}

export function deleteToken() {
    localStorage.removeItem(KEY_TOKEN);
}

export function initRequestInterceptors() {
    axios.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    });

    axios.interceptors.response.use((response) => {
        return response;
    })
}