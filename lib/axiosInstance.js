// lib/axiosInstance.js
import axios from 'axios';

// Créer une instance d'Axios avec des configurations globales
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://admin.hortenia.com', // URL de base sans /api
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter automatiquement le token JWT à chaque requête si présent
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Récupérer le token depuis localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Ajouter l'en-tête d'autorisation
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
