import React, { useState } from 'react'
import AddUser from "./AddUser";
import UserCard from './UserCard';

function App() {
  const [username, setUsername] = useState("me")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  function usernameChangeHandler(event) {
    setUsername(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setIsFormSubmitted(true)
  }
  return (
    <div style={{ display: 'flex', justifyContent: "space-evenly", flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <AddUser usernameChangeHandler={usernameChangeHandler} onSubmitHandler={onSubmitHandler} />
      {
        isFormSubmitted ? <UserCard username={username} /> : null
      }
    </div>
  );
}

export default App;
