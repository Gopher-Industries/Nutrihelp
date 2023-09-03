import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
    return (
      <div>
        <div style={{marginBottom: "40px"}}>
        <SignIn />
        </div>
        <SignUp />
      </div>
    );
  }
  

export default App;
