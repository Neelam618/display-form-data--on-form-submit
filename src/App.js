import React, { useState } from 'react'
import AddUser from "./AddUser";
import UserCard from './UserCard';

function App() {
  const [username, setUsername] = useState(null)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [userData, setUserData] = useState([])

  function usernameChangeHandler(event) {
    setUsername(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setIsFormSubmitted(true)
    setUserData([...userData, { name: username }])
  }
  return (
    <div style={{ display: 'flex', justifyContent: "space-evenly", flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <AddUser usernameChangeHandler={usernameChangeHandler} onSubmitHandler={onSubmitHandler} />
      {
        isFormSubmitted ? <UserCard userData={userData} /> : null
      }
    </div>
  );
}

export default App;
