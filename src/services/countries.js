import axios from "axios";
import Country from "../models/Country";

export async function getAll(){
    try {
        const {data: {data}} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}countries`);
        return data.map(data => new Country(data.id, data.name));
    }catch(e){
        console.error(e);
        return [];
    }
}
export async function get(id){
    try {
        const {data: {data}} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}countries/${id}`);
        return new Country(data.id, data.name);
    }catch(e){
        console.error(e);
        return [];
    }
}
