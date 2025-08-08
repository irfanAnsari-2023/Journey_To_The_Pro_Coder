import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

function UpdateUser() {
  const { updateName } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateName(newName);
    setNewName('');
  }

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={handleChange}
          placeholder="Enter new name"
        />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
}

export default UpdateUser;
