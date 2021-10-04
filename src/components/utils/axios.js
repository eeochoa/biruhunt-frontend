import axios from "axios";

const api = axios.create({
    baseURL: 'https://biru-hunt.herokuapp.com/'
});

export default api;