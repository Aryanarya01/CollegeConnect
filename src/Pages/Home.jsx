import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
const Home = () => {
  const navigate = useNavigate();
  const handelJoin = () => {
    navigate("/signup");
  };

  return (
    <div className=" constainer background">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Campus Connect
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="/login">
                Login
              </a>
              <a className="nav-link" href="/signup">
                SignUp
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <h1
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            margin: "0",
            padding: "12px 20px",
            color: "white",
            
    display: "inline-block",
               borderRadius: "6px",
          }}
        >
          Welcome to Home Page
        </h1>
        <h3>Connect to your college Community</h3>

        <button type="button" onClick={handelJoin} class="btn btn-primary">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
