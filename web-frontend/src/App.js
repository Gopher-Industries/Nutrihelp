import React from 'react';

import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PREFERENCE from './components/Preference';
import DIETPLAN from './components/DietPlan';
import GROCERIES from './components/Groceries';

function App() {
    return (
      <div>
        {/* <PREFERENCE/> */}
        {/* <DIETPLAN/> */}
        <GROCERIES/>
      </div>
    );
  }
  

export default App;
