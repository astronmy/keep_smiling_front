import axios from "axios";
import Country from "../models/Country";

export async function getAll(token){
    const config =  {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const {data: {data}} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}countries`, config);
        return data.map(data => new Country(data.id, data.name));
    }catch(e){
        console.error(e);
        return [];
    }
}
export async function get(id, token){
    const config =  {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const {data: {data}} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}countries/${id}`, config);
        return new Country(data.id, data.name);
    }catch(e){
        console.error(e);
        return [];
    }
}
