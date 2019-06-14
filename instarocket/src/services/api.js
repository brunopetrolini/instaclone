import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',  //QUANDO ESTIVER NO EMULADOR
  //baseURL: 'http://192.168.0.110:3333',  //QUANDO ESTIVER RODANDO EM UM DISPOSITIVO  
})

export default api;