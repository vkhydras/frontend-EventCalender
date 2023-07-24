import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/create-event">Create Event</Link>
              </li>
              
              <li>
                <button onClick={onLogout}>Log out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
