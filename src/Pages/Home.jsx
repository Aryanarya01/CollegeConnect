import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { NavLink } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handelJoin = () => {
    navigate("/signup");
  };

  return (
    <div className="constainer background">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <NavLink style={{fontWeight:"700",color:"white"}} className="navbar-brand" to="#">
            Campus Connect
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="homeNav navbar-nav">
              <NavLink className="nav-link" to="/login">
                Login 
              </NavLink>
                <span className="nav-separator">|</span>
              <NavLink className="nav-link" to="/signup">
                SignUp
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <h1
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            margin: "0",
            padding: "12px 30px",
            color: "white",
            width: "fit-content",
            borderRadius: "4px",
          }}
        >
          Welcome to Campus Connect
        </h1>
        <h4
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "8px 30px",
            width: "fit-content",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Connect to your college Community.
        </h4>

        <button style={{margin:"1rem",width:"11rem",backgroundColor:"green",fontWeight:"700",color:"white"}} type="button" onClick={handelJoin} class="btn">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
