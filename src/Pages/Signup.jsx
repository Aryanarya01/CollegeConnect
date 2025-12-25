import React, { useState } from "react";
import { saveUserData } from "../utils/Storage";

import { Navigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setIsLogin] = useState(false);

  const handelsubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };
    saveUserData(newUser);
    alert("Signup Successful");
    setIsLogin(true);
  };
  if (login) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="signup-page"> 
    <div className="container signup">
      <h1>Sign Up for Campus Connect</h1>
      <p>Create your account to get started.</p>
      <form className="signform" onSubmit={handelsubmit}>
        <div>
          <label htmlFor="name" class="form-label">Name:</label>
          <input
          placeholder="Enter your name"
          class="form-control"
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email" class="form-label">Email:</label>
          <input
          placeholder="name@example.com"
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password" class="form-label">Password:</label>
          <input
          placeholder="Enter your password"
            class="form-control"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button style={{marginTop:"1rem",fontWeight:"500",backgroundColor:"rgba(241, 172, 42, 1)",width:"8rem"}} type="submit" class="btn">Signup</button>
      </form>
      <p>Already have an account? <a style={{textDecoration:"none"}} href="/login">Login here</a></p>
    </div>
    </div>
  );
};

export default Signup;
