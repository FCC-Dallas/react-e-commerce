import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/Products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/Cart">
          Shopping Cart
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
