// blogApi.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/', // Ensure trailing slash matches Django URLs
});

// Automatically attach JWT token to all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('access'); // ✅ Corrected token key
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
