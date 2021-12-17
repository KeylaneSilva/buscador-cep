import axios from 'axios'

const api = axios.create({
    // link da api
    baseURL: "http://viacep.com.br/ws/"
})

export default api;