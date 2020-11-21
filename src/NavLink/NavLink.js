import React from "react";
import "./NavLink.css";

const NavLink = (props) => {
  return (
    <a href={props.link} className="nav-link">
      {props.svg}
      <span className="link-text">{props.text}</span>
    </a>
  );
};

export default NavLink;
