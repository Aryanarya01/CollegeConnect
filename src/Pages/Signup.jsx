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
          <label>Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
