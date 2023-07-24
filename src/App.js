import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Header from './components/common/Header';
import Calendar from './components/calendar/Calendar';
import EventDetails from './components/calendar/EventDetails';
import EventForm from './components/calendar/EventForm';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import HomePage from './components/calendar/Homepage';
import HomePage1 from './components/calendar/HomePage1';




const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated from local storage on initial render
    const authenticated = localStorage.getItem('isAuthenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    // Simulated login logic. Replace this with actual authentication logic.
    setIsAuthenticated(true);
    // Store the authentication state in local storage
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    // Simulated logout logic. Replace this with actual logout logic.
    setIsAuthenticated(false);
    // Remove the authentication state from local storage
    localStorage.removeItem('isAuthenticated');
    // Redirect the user to the login page after logout
    navigate('/login');
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <Routes>
        {isAuthenticated ? (
          <>
            <Route index path="/" element={<HomePage1 />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/create-event" element={<EventForm />} />
            {/* Add other authenticated routes */}
          </>
        ) : (
          <>
            <Route path="/" index element={<HomePage />} />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />} // Pass the handleLogin function to Login component
            />
            <Route path="/register" element={<Register />} />
          </>
        )}
        {/* Add other routes that are accessible for both authenticated and unauthenticated users */}
      </Routes>
    </div>
  );
};

export default App;
