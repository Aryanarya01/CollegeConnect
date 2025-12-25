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
        return <Navigate to ="/feed"/>
    }

  return (
      <div className="signup-page">
    <div className="container signup"> 
        <h1>Login in to Campus Connect</h1>
        <p>Enter your credentials to access your account.</p>
        <form className='signform' onSubmit={handelSubmit}> 
        <div>
          <label htmlFor='email' class="form-label">Email:</label>
          <input
          placeholder='Enter your email'
            onChange={(e) => setEmailLog(e.target.value)}
            type="text"
            name="email"
            class="form-control"
            id='email'
          />
        </div>
        <div>
          <label htmlFor='password' class="form-label">Password:</label>
          <input
          placeholder='Enter you password'
            onChange={(e) => setPasswordLog(e.target.value)}
            type="password"
            name="password"
            class="form-control"
            id='password'
          />
        </div>
        <button type='submit' class="btn" style={{marginTop:"1rem",fontWeight:"500",backgroundColor:"rgba(241, 172, 42, 1)",width:"8rem"}} >Login</button>
        </form>
        <p>Don't have an account? <a style={{textDecoration:"none"}} href="/signup">SignUp here</a></p>
    </div>
    </div>
  )
}

export default Login