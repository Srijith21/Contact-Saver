import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">
          Logo
        </Link>
        <div className="collapse navbar-collapse container" id="navbarNav">
          <ul className="navbar-nav column">
            <li className="nav-item active col">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourite">
                favourite
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
