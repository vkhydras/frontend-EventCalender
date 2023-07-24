import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user as null

  // Function to set the authenticated user after successful login
  const login = (userData) => {
    setUser(userData);
  };

  // Function to clear the authenticated user after logout
  const logout = () => {
    setUser(null);
  };

  // You can add other authentication-related functions here

  return (
    <AuthContext.Provider value={{ user, login, logout }}> {/* Include the login and logout functions */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
