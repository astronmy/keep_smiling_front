import axios from "axios";
import Dentist from "../models/Dentist";

export async function getAll(){
    try {
        const {data: {data}} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}dentists`);
        return data.map(data => new Dentist(data));
    }catch(e){
        console.error(e);
        return [];
    }
}
export async function get(id){
    try {
        const {data: {data}} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}dentists/${id}`);
        return new Dentist(data);
    }catch(e){
        console.error(e);
        return [];
    }
}
