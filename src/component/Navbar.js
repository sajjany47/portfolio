import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                  Sajjan Yadav
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link
                        class="nav-link"
                        activeClassName="menu_active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="nav-link"
                        activeClassName="menu_active"
                        to="/Service"
                      >
                        Services
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="nav-link"
                        activeClassName="menu_active"
                        to="/About"
                      >
                        About
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="nav-link"
                        activeClassName="menu_active"
                        to="/Contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
