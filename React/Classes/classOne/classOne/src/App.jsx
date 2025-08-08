import React from 'react'

import { UserProvider } from './components/UserContext';
import UserProfile from './components/UserProfile';
import UpdateUser from './components/UpdateUser';
import CounterUseReducer from './components/CounterUseReducer';






const App = () => {
  return (
    <CounterUseReducer />

    //  <UserProvider>
    //   <div>
    //     <h1>React Context Demo</h1>
    //     <UserProfile /> 
    //   <UpdateUser />
    //   </div>
    // </UserProvider>

  )
}

export default App