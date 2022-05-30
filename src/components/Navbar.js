import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="nav-link active" to="/">
          Pokemon
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/caught">
              Caught
            </Link>
            <Link className="nav-link active" to="/mystery">
              Mystery
            </Link>
          </div>
        </div>
        <div>
          {isLoggedIn ? (
            <>
              <Link className="mx-2 btn btn-danger" to="/catch">
                Catch em All
              </Link>
              <button className="btn btn-danger" onClick={onLogout}>
                Log out
              </button>
            </>
          ) : (
            <Link className="btn btn-danger" to="/login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
