import axios from "axios";
import Dentist from "../models/Dentist";

export async function getAll(token){
    const config =  {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const {data: {data}}  = await axios.get(`${process.env.REACT_APP_API_BASE_URL}dentists`, config);
        return data.map(item => new Dentist(item.id, item.name, item.surname, item.gender, item.email, item.country_id, item.country_name, item.created_at));
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
        const {data: {data}} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}dentists/${id}`, config);
        return new Dentist(data.id, data.name, data.surname, data.gender, data.email, data.country_id, data.country_name, data.created_at);
    }catch(e){
        console.error(e);
        return [];
    }
}
