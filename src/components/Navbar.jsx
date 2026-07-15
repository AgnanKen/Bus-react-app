import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            College Bus Management
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/addbus">
                  Add Bus
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/viewbus">
                  View Bus
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/adddriver">
                  Add Driver
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/viewdriver">
                  View Driver
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/addstudent">
                  Add Student
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/viewstudent">
                  View Student
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;