import axios from 'axios';

const api = axios.create({
  baseURL: "https://rios-backend-omnistack11.herokuapp.com",
})

export default api;