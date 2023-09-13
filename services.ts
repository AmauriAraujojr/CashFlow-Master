import axios from "axios";

export const Api =axios.create({
    baseURL:"https://cashflowmasterapi.onrender.com/api",
    timeout:50000
    
    })