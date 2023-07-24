// src/services/event.js

import api from './api';

const eventService = {
  getEvents: async () => {
    try {
      const response = await api.get('/events');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createEvent: async (eventData) => {
    try {
      const response = await api.post('/events', eventData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteEvent: async (eventId) => {
    try {
      const response = await api.delete(`/events/${eventId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other event-related functions (e.g., updateEvent) as needed
};

export default eventService;
