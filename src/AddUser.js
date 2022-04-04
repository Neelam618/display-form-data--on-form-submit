import React, { useState } from 'react'

function AddUser(props) {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    function usernameChangeHandler(event) {
        setUsername(event.target.value)
    }
    function ageChangeHandler(event) {
        setAge(event.target.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.addUserHandler(username, age)
        setUsername("")
        setAge("")

        if (age < 0 || age > 110) {
            alert("Please enter a valid age")
        }
    }

    return (
        <div style={{ width: '60%', background: '#35413d', color: 'white', padding: '2em', display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={onSubmitHandler}>
                <label style={{ display: 'block', marginBottom: '8px' }} > Username</label>
                <input type="text" maxLength={20} value={username} onChange={usernameChangeHandler} /><br /><br />
                <label style={{ display: 'block', marginBottom: '8px' }}>Age</label>
                <input type="number" value={age} onChange={ageChangeHandler} style={{ display: 'block' }} />
                <button style={{ marginTop: '1em' }}>Submit</button>
            </form>
        </div >
    )
}

export default AddUser