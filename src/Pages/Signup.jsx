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
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handelsubmit}>
        <div>
          <label   class="form-label">Name:</label>
          <input
          class="form-control"
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label  class="form-label">Email:</label>
          <input
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
          />
        </div>
        <div>
          <label class="form-label">Password:</label>
          <input
            class="form-control"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Signup</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
