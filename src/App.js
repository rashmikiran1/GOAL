import React, { useState } from 'react';
import NameAgeForm from './form/form';
import UserList from './form/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>React User Management</h1>
      <NameAgeForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
