import React, { useState, useEffect } from 'react';
import './App.css';
import UserLogin from './components/UserLogin'; // Assuming this component exists

const MainApp = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Timer to hide the splash screen after 5 seconds
    const splashTimeout = setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <div>
      {isSplashVisible ? (
        <div className="splash-container">
          <img src="./assets/logo.jpg" alt="App Logo" className="splash-logo" />
        </div>
      ) : (
        <UserLogin />
      )}
    </div>
  );
};

export default MainApp;
