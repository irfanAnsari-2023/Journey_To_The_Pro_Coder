import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, <strong>{user.name}</strong>!</p>
    </div>
  );
}

export default UserProfile;
