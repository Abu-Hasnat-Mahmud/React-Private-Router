import React from "react";

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";



const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Link to="/Home">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/About">About</Link>
      {user?.email && <button onClick={logOut}>Logout</button>}
      {user?.email || <Link to="/Login">Login</Link>}
    </div>
  );
};

export default Header;
