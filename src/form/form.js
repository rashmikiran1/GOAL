import React, { useState } from 'react';

const NameAgeForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleAddUser = () => {
    if (name.trim() === '' || age.trim() === '') {
      setError('Please provide both name and age.');
      return;
    }

    const parsedAge = parseInt(age);
    if (isNaN(parsedAge) || parsedAge <= 0) {
      setError('Please provide a valid age.');
      return;
    }

    setError('');
    addUser({ name, age: parsedAge });
    setName('');
    setAge('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default NameAgeForm;
