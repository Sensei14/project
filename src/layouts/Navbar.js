import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="navbar navbar-expand bg-dark">
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              {" "}
              Link1{" "}
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              {" "}
              Link1{" "}
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              {" "}
              Link1{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
