import React from 'react';
import { PasskeyEnrollment as ScreenProvider } from "@auth0/auth0-acul-js";

const App = () => {
  const handleClick = () => {
    console.log("button clicked react");

    const screenProvider = new ScreenProvider();
    screenProvider.continuePasskeyEnrollment();
  };

  return (
    <div>
      <h1>Passkey POC</h1>
      <button type="submit" onClick={handleClick}> Login 2</button>
    </div>
  );
};

export default App;