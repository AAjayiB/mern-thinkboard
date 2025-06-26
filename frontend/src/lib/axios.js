import axios from "axios";


// no localhost in production so we have to make base url dynamic
const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:5001/api' : '/api'
const api = axios.create({
    baseURL: BASE_URL,

})

export default api