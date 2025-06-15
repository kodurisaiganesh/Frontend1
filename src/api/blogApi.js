// blogapi.jsx
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Dynamically set from .env
});

// Automatically attach JWT token to all requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access'); // JWT access token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
