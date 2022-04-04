import React from 'react'

function UserCard(props) {
    return (
        props.userData.map((user) => {
            return (
                <div style={{ width: '60%', background: '#35410d', color: 'white', padding: '2em', display: 'flex' }} key={user.id}>
                    {user.name} ({user.age})
                </div>
            )
        })

    )
}

export default UserCard