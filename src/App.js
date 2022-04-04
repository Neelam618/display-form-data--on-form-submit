import React, { useState } from 'react'
import AddUser from "./AddUser";
import UserCard from './UserCard';

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [userData, setUserData] = useState([])

  const addUserHandler = (uName, uAge) => {
    setIsFormSubmitted(true)
    setUserData((prevUserData) => {
      return [...prevUserData, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div style={{ display: 'flex', justifyContent: "space-evenly", flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <AddUser addUserHandler={addUserHandler} />
      {
        isFormSubmitted ? <UserCard userData={userData} /> : null
      }
    </div>
  );
}

export default App;
