import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter to enable routing
import AuthProvider from './components/auth/AuthContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <Router>
            <AuthProvider>
                  <App />
            </AuthProvider>
      </Router>
)