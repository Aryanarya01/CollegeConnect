import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Feed from "./Pages/Feed";
import NotFound from "./Pages/NotFound";
import MyPost from "./Pages/MyPost";
import Profile from "./Pages/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
