import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./contexts/UserContext";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout().then(() =>
      console
        .log("Sign Out successfully")
        .catch((error) => console.error(error))
    );
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <div className="flex-none ml-auto ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/orders"}>Orders</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>

            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <button onClick={handleLogOut} className="btn btn-primary">
                Logout
              </button>
            </li>
            <li>
              <a className="link link-accent">
                {user?.uid ? <p>{user.email}</p> : <p></p>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
