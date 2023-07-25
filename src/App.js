import React, { useState } from 'react';

  import Login from './Components/login/Login';
import Home from './Components/home/Home';
import MainHeader from './Components/mainheader/MainHeader';
import AuthContext from './Store/Auth-Context';
  
  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const loginHandler = (email, password) => {
     
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      setIsLoggedIn(false);
    };
  
    return (
      <AuthContext.Provider
      value={{isLoggedIn:isLoggedIn,
              onLogout:logoutHandler        
      }}
      >
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    );
  }
  
  export default App;
  
