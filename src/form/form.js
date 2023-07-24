import React, { useState } from 'react';

const NameAgeForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [college, setCollege] = useState('');
  const [error, setError] = useState('');

  const handleAddUser = () => {
    if (name.trim() === '' || age.trim() === ''|| college.trim()==='') {
      setError('Please provide both name and age.');
      return;
    }

    const parsedAge = parseInt(age);
    if (isNaN(parsedAge) || parsedAge <= 0) {
      setError('Please provide a valid age.');
      return;
    }

    setError('');
    addUser({ name, age: parsedAge, college });
    setName('');
    setAge('');
    setCollege('');
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
       <input
        type="text"
        placeholder="College"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default NameAgeForm;
