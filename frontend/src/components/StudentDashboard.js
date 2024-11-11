import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const StudentDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackToLogin = () => {
    navigate('/'); // Navigate back to the login page (root route)
  };

  return (
    <div>
      <h1>Welcome to the Student Dashboard!</h1>
      <button onClick={handleBackToLogin}>Back to Login</button>
    </div>
  );
};

export default StudentDashboard;
