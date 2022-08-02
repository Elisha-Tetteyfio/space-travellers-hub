import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/planet.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="spaceX logo" />
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/my_profile">My profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
