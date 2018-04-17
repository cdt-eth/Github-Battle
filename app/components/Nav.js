import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * ___Navigation Bar___
 *
 * NavLink used over Link for styling capability
 *  • now have access to activeClassName property
 *  • active/current page is colored
 */

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
