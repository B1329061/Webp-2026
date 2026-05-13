import React from 'react';
import Cgu_multiButton from './cgu_multiButton'; 
import HelloCGU from './HelloCGU';           
import CGU_Login from './cgu_login';

function App() {
  return (
    <div className="App">
      <div>
        <HelloCGU /> 
      </div>
      <div>
        <Cgu_multiButton num={10} />
      </div>
      <CGU_Login />
    </div>
  );
}

export default App;