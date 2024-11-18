import axios from 'axios';

// Crée une instance Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

// Ajoute un intercepteur pour inclure le token dans chaque requête
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
