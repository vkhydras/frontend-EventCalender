// EventDetails.js
import React from 'react';
import eventService from '../../services/event';
import { useAuth } from '../auth/AuthContext'; // Import useAuth hook

const EventDetails = ({ event, onDelete }) => {
  const { user } = useAuth(); // Use the useAuth hook to get the authenticated user information
  const authenticatedUserID = user?._id; // Assuming the user object contains the user ID

  const handleDelete = () => {
    eventService.deleteEvent(event._id)
      .then(() => {
        onDelete(event._id); // Update the events in the parent component after successful deletion
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });
  };

  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>Date: {event.start}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      {authenticatedUserID === event.createdBy && ( // Show the delete button only if the authenticated user created the event
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
};

export default EventDetails;
