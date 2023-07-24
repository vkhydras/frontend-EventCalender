import axios from 'axios';

const api = axios.create({
  baseURL: 'https://eventcalender-server.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`, // Include the token from local storage
  },
});

export default api;
