// src/services/auth.js

import api from './api';

const authService = {
  login: async (userData, onLogin) => {
    try {
      const response = await api.post('/users/login', userData);
      const { token } = response.data;

      // Save the token in localStorage
      localStorage.setItem('authToken', token);

      // Call the onLogin function to update the isAuthenticated state in the App component
      onLogin();

      return response.data;
    } catch (error) {
      // Handle authentication error
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('An error occurred during login.');
      }
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      // Handle registration error
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('An error occurred during registration.');
      }
    }
  },

  // Add other authentication-related functions (e.g., logout) as needed
};

export default authService;
