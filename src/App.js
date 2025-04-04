import React from 'react';
import { PasskeyEnrollment as ScreenProvider } from "@auth0/auth0-acul-js";

const App = () => {
  const handleClick = () => {
    console.log("button clicked react");

    const screenProvider = new ScreenProvider();
    screenProvider.PasskeyEnrollment();
  };

  return (
    <div>
      <h1>Passkey POC</h1>
      <button type="submit" onClick={handleClick}> Enable Passkey</button>
    </div>
  );
};

export default App;