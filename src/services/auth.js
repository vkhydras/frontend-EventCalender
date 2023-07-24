// src/services/auth.js

import api from './api';

const authService = {
  login: async (userData, onLogin) => { // Pass onLogin function as a parameter
    try {
      const response = await api.post('/users/login', userData);
      const { token } = response.data;

      // Save the token in localStorage or cookies
      localStorage.setItem('authToken', token);

      // Call the onLogin function to update the isAuthenticated state in the App component
      onLogin();

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other authentication-related functions (e.g., logout) as needed
};

export default authService;
