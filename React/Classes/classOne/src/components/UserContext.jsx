import React, { createContext, useState } from 'react';

// Create the Context
export const UserContext = createContext();

// Create a Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Guest' });

  // Function to update user name
  function updateName(newName) {
    setUser({ name: newName });
  }

  return (
    <UserContext.Provider value={{ user, updateName }}>
      {children}
    </UserContext.Provider>
  );
}
