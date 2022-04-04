import React from 'react'

function UserCard(props) {
    return (
        <div style={{ width: '60%', background: '#35410d', color: 'white', padding: '2em', display: 'flex' }}>
            {props.username}
        </div>
    )
}

export default UserCard