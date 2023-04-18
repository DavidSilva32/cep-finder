import axios from 'axios'

// https://viacep.com.br/ 01310930/json

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default api;