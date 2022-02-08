import axios from 'axios'

const api = axios.create({
    // link da api
    baseURL: process.env.REACT_APP_API_URL,
})

export default api;