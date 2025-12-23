import React, { use, useState } from 'react'
import { authenticateUser } from '../utils/Storage';
import { Navigate } from 'react-router-dom';
import Home from './Home';
const Login = () => {
    const [emailLog,setEmailLog] = useState("");
    const [passwordLog,setPasswordLog] = useState("");
    const [loginStatus,setLoginStatus] = useState(false);

    const handelSubmit = (e)=>{
        e.preventDefault();
        const users = authenticateUser(emailLog,passwordLog);
        if(users){
            alert("Login Successful");
            setLoginStatus(true);
        } else{ 
            alert("Invalid Credentials");
        }
    }
    if(loginStatus){
        return <Navigate to ="/home"/>
    }

  return (
    <div> 
        <h1>Login Page</h1>
        <form onSubmit={handelSubmit}> 
        <div>
          <label>Email:</label>
          <input
            onChange={(e) => setEmailLog(e.target.value)}
            type="text"
            name="email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            onChange={(e) => setPasswordLog(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login