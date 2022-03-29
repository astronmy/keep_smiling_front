import axios from "axios";

export async function login(username, password){
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}login`, {email: username, password: password});
        return response.data;
    }catch(e){
        console.error(e);
        return null;
    }
}
