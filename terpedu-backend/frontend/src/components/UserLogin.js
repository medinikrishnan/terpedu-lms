import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [userInput, setUserInput] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigation = useNavigate();

  const handleUserAuthentication = (event) => {
    event.preventDefault();
    // To check user authentication logic
    if (userInput === 'student') {
      navigation.push('/dashboard-student');
    } else if (userInput === 'instructor') {
      navigation.push('/dashboard-instructor');
    } else if (userInput === 'admin') {
      navigation.push('/dashboard-admin');
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
