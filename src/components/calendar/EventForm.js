import React, { useState } from 'react';
import eventService from '../../services/event';
import './EventForm.css'; // Import the CSS file

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });

  const { title, description, date, time, location } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the createEvent function from the eventService to create a new event
    eventService.createEvent(formData)
      .then((response) => {
        // Handle successful event creation (e.g., show success message)
        console.log('Event created:', response);
        // Reset the form after successful creation
        setFormData({
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
        });
      })
      .catch((error) => {
        // Handle event creation error (e.g., show error message)
        console.error('Event creation error:', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
