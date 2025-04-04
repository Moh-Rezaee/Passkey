import React, { use } from 'react';
import PasskeyEnrollmentLocal from '@auth0/auth0-acul-js/passkey-enrollment-local';

const App = () => {
  const handleClick = () => {
    console.log("button clicked react");

    const passkeyEnrolemnetLocal = new PasskeyEnrollmentLocal();
    passkeyEnrolemnetLocal.continuePasskeyEnrollment();
  };

  return (
    <div>
      <h1>Passkey POC</h1>
      <button type="submit" onClick={handleClick}> Enable Passkey</button>
    </div>
  );
};

export default App;