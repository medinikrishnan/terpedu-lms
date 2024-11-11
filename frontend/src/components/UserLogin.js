import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is installed with `npm install react-router-dom`

const UserLogin = () => {
  const [userInput, setUserInput] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate(); // Corrected variable name (navigation to navigate for consistency)

  const handleUserAuthentication = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', userInput, userPassword); // Debugging log

    // Simple authentication logic for demonstration
    if (userInput === 'student') {
      console.log('Navigating to student dashboard');
      navigate('/dashboard-student'); // Corrected function call
    } else if (userInput === 'instructor') {
      console.log('Navigating to instructor dashboard');
      navigate('/dashboard-instructor');
    } else if (userInput === 'admin') {
      console.log('Navigating to admin dashboard');
      navigate('/dashboard-admin');
    } else {
      alert('Invalid user credentials');
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleUserAuthentication}>
        <input
          type="text"
          placeholder="Enter Username"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default UserLogin;
