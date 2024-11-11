import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const InstructorDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackToLogin = () => {
    navigate('/'); // Navigate back to the login page (root route)
  };

  return (
    <div>
      <h1>Welcome to the Instructor Dashboard!</h1>
      <button onClick={handleBackToLogin}>Back to Login</button>
    </div>
  );
};

export default InstructorDashboard;
