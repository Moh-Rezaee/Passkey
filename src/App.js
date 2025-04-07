import React, { use } from 'react';
import PasskeyEnrollment from '@auth0/auth0-acul-js/passkey-enrollment';

const App = () => {
  const handleClick = () => {
    console.log("button clicked react");

    const passkeyEnrollment = new PasskeyEnrollment();
    console.log("passkey 1: "+ JSON.stringify(passkeyEnrollment.client));
    console.log("passkey 2: "+ JSON.stringify(passkeyEnrollment.screen));
    console.log("passkey 3: "+ JSON.stringify(passkeyEnrollment.tenant));
    console.log("passkey 5: "+ JSON.stringify(passkeyEnrollment.user));
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