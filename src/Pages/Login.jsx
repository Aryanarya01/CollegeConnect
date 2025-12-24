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
          <label class="form-label">Email:</label>
          <input
            onChange={(e) => setEmailLog(e.target.value)}
            type="text"
            name="email"
            class="form-control"
          />
        </div>
        <div>
          <label class="form-label">Password:</label>
          <input
            onChange={(e) => setPasswordLog(e.target.value)}
            type="password"
            name="password"
            class="form-control"
          />
        </div>
        <button type='submit' class="btn btn-primary">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  )
}

export default Login