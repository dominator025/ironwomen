import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
