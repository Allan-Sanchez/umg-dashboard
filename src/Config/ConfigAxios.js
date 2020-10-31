import axios from 'axios';

const clientAxios = axios.create({
    baseURL: process.env.VUE_APP_RUTA_API
});

export default clientAxios;