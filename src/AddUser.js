import React from 'react'

function UserForm() {
    return (
        <div style={{ width: '60%', background: '#35413d', color: 'white', padding: '2em', display: 'flex', justifyContent: 'center' }}>
            <form>
                <label style={{ display: 'block', marginBottom: '8px' }} > Username</label>
                <input type="text" /><br /><br />
                <label style={{ display: 'block', marginBottom: '8px' }}>Age</label>
                <input type="number" style={{ display: 'block' }} />
            </form>
        </div >
    )
}

export default UserForm