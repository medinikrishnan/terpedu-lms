import React, { useState, useEffect } from 'react';
import './MainApp.css';
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here
import UserLogin from './components/UserLogin';
import StudentDashboard from './components/StudentDashboard';
import InstructorDashboard from './components/InstructorDashboard';
import AdminDashboard from './components/AdminDashboard';

const MainApp = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <div>
      {isSplashVisible ? (
        <div className="splash-container">
          <img src="/assets/logo.jpg" alt="App Logo" className="splash-logo" /> {/* Ensure path is correct */}
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/dashboard-student" element={<StudentDashboard />} />
          <Route path="/dashboard-instructor" element={<InstructorDashboard />} />
          <Route path="/dashboard-admin" element={<AdminDashboard />} />
          <Route path="*" element={<div>Page Not Found</div>} /> {/* Optional fallback route */}
        </Routes>
      )}
    </div>
  );
};

export default MainApp;
