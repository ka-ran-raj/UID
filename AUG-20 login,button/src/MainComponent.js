import React from 'react';
import { LoginButton, LogoutButton } from './Button'; // Correct import path

const MainComponent = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default MainComponent;
