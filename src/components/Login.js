import React from 'react'
import { useDispatch } from 'react-redux'
import { loginAction, logoutAction } from '../store/feature/login/LoginSlice'

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={()=> {dispatch(loginAction({name: "redux", surname: "toolkit"}))}}>Login</button>
            <button onClick={()=> {dispatch(logoutAction())}}>Logout</button>
        </div>
    )
}

export default Login