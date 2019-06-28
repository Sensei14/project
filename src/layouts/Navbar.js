import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="navbar-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/character"
              activeClassName="active-nav"
            >
              Postać
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/shop"
              activeClassName="active-nav"
            >
              Sklep
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/quests"
              activeClassName="active-nav"
            >
              Zadania
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/expedition"
              activeClassName="active-nav"
            >
              Wyprawa
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="ml-auto mr-2">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Wyloguj
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
