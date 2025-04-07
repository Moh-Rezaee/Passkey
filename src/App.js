import React, { use } from 'react';
import PasskeyEnrollment from '@auth0/auth0-acul-js/passkey-enrollment';

const App = () => {
  const handleClick = () => {
    console.log("button clicked react");

    const passkeyEnrollment = new PasskeyEnrollment();
    console.log("passkey 1: "+ passkeyEnrollment.client);
    console.log("passkey 2: "+ passkeyEnrollment.screen);
    console.log("passkey 3: "+ passkeyEnrollment.tenant);
    console.log("passkey 4: "+ passkeyEnrollment.user.email);
    console.log("passkey 5: "+ passkeyEnrollment.user);
    passkeyEnrollment.continuePasskeyEnrollment();

    console.log("button clicked react 2");
  };

  return (
    <div>
      <h1>Passkey POC</h1>
      <button type="submit" onClick={handleClick}> Enable Passkey</button>
    </div>
  );
};

export default App;