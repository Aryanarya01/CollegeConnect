import { useState } from "react";
import { Route, Routes } from "react-router-dom";
 import Signup from './Pages/Signup';
 import Home from './Pages/Home';
 import Login from './Pages/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
