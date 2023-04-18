import React from "react";
import { useContext } from "react";
import { useNavigate, Link, Routes, Route } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = ({setBoolean}) => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>YouVideos</b>
          </Link>
        </li>
        <li>
        {user ? (
           <Link to="/"> <button onClick={logoutUser}>Logout</button> </Link>
          ) : (
            <Link to="login"><button>Login</button></Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
