import React, { use } from 'react';
import { PasskeyEnrollmentLocal as ScreenProvider } from "@auth0/auth0-acul-js";

const App = () => {
  const handleClick = () => {
    console.log("button clicked react");

    const screenProvider = new ScreenProvider();
    screenProvider.continuePasskeyEnrollmentLocal();
  };

  return (
    <div>
      <h1>Passkey POC</h1>
      <button type="submit" onClick={handleClick}> Enable Passkey</button>
    </div>
  );
};

export default App;