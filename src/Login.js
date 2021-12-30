import React, { useEffect, useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')

    const LoginC = (e) => {
        e.preventDefault();
        localStorage.setItem('user', username)
        console.log(username)
        setName(username)
    }
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser ) {
            setName(loggedInUser);
        }
        console.log(loggedInUser)
    }, []);
    const logout = () => {
        setName('')
        setUsername('')
        localStorage.clear()
    }
    if (name) {
        return (<div><h1> hi  {name}</h1><button onClick={logout}>Logoout</button></div>)
    }
    return (

        <div>
            <h1>Login Form </h1>

            <input type="text" value={username} onChange={e => setUsername(e.target.value)} ></input>
            <button onClick={LoginC}>Login</button>
        </div>
    )
}
export default Login;