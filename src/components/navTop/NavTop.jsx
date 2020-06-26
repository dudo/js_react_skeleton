import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavTop.css";

const NavTop = props => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const menuToggle = () => {
    setMenuExpanded(!menuExpanded);
  };
  const MenuItems = () => {
    const items = ['foo', 'bar'].map((item, i) => {
      return <li key={i}>
        <Link className="nav-links" to={`/${item}`}>
          {item}
        </Link>
      </li>;
    });
    return(
      <ul className={`main-nav ${menuExpanded && "active"}`}>
        {items}
      </ul>
    );
  };

  return (
    <nav className="NavTop">
      <span className="navbar-toggle" onClick={menuToggle}>
        <i className="fas fa-bars"></i>
      </span>
      <Link className="logo" to="/">
        header
      </Link>
      <MenuItems />
    </nav>
  );
};

export default NavTop;
