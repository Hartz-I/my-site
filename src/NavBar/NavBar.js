import React from "react";
import "./NavBar.css";
import NavLink from "../NavLink/NavLink";
import icons from "../icons";

const NavBar = (props) => (
  <div className="NavBar">
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <NavLink text="Hartz" svg={icons.logo} />
        </li>

        <li className="nav-item">
          <NavLink text="Github" svg={icons.cat} link="#" />
        </li>

        <li className="nav-item">
          <NavLink text="Aliens" svg={icons.aliens} link="#" />
        </li>

        <li className="nav-item">
          <NavLink text="Space" svg={icons.space} link="#" />
        </li>

        <li className="nav-item">
          <NavLink text="Shuttle" svg={icons.shuttle} link="#" />
        </li>

        <li className="nav-item" id="themeButton">
          <NavLink text="Themify" svg={icons.themify} link="#" />
        </li>

        <li className="nav-item" id="facebook">
          <NavLink text="Facebook" svg={icons.link} />
        </li>
      </ul>
    </nav>
  </div>
);
export default NavBar;
