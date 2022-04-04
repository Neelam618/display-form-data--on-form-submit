import React from 'react'

function AddUser(props) {
    return (
        <div style={{ width: '60%', background: '#35413d', color: 'white', padding: '2em', display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={props.onSubmitHandler}>
                <label style={{ display: 'block', marginBottom: '8px' }} > Username</label>
                <input type="text" onChange={props.usernameChangeHandler} /><br /><br />
                <label style={{ display: 'block', marginBottom: '8px' }}>Age</label>
                <input type="number" onChange={props.ageChangeHandler} style={{ display: 'block' }} />
                <button>Submit</button>
            </form>
        </div >
    )
}

export default AddUser