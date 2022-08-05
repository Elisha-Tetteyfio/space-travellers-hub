import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <div className={styles.imgDiv}>
        <img src={logo} alt="spaceX logo" className={styles.logo} />
        <h1>Space Traveller&apos;s Hub</h1>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/" exact className={styles.linkItem} activeClassName={styles.active}>Rockets</NavLink>
        </li>
        <li className={styles.missionLink}>
          <NavLink to="/missions" exact className={styles.linkItem} activeClassName={styles.active}>Missions</NavLink>
        </li>
        <li>
          <NavLink to="/my_profile" exact className={styles.linkItem} activeClassName={styles.active}>My profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
