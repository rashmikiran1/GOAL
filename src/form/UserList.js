import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <div>
        {users.map((user, index) => (
          <h2 key={index}>
            {user.name}  {user.age}  {user.college}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default UserList;
