import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.loginReducer.value)
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
        </div>
    )
}

export default Profile