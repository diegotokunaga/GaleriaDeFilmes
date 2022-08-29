
//base da api: https://api.themoviedb.org/3/
//url da api : https://api.themoviedb.org/3/movie/now_playing?api_key=8f49cc1ac79e8bd9bbdfdab8585c0f4f&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

