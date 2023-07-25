import React, { useContext, useState } from 'react';

import Login from './Components/login/Login';
import Home from './Components/home/Home';
import MainHeader from './Components/mainheader/MainHeader';
import AuthContext from './Store/Auth-Context';
  
  function App() {
    const ctx = useContext(AuthContext)
    return (
    <React.Fragment>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </React.Fragment>
    );
  }
  
  export default App;
  
