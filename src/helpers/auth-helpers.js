const KEY_TOKEN = "KEEP_SMILE_TKN";

export function setUserToken(token) {
    sessionStorage.setItem(KEY_TOKEN, token);
}

export function getUserToken() {
    return sessionStorage.getItem(KEY_TOKEN);
}

export function deleteUserToken() {
    sessionStorage.removeItem(KEY_TOKEN);
}

export function isLogged() {
    if(sessionStorage.getItem(KEY_TOKEN)){
        return true;
    }
    return false;
}
