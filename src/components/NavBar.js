import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            NewsApp
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li key='Business' className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </NavLink>
              </li>
              <li key='Sports' className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </NavLink>
              </li>
              <li key='Entertainment' className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
              </li>
              <li key='Technology' className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </NavLink>
              </li>
              <li key='Science' className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;