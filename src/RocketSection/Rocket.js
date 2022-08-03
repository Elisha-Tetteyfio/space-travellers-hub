import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rocket.module.css';

function Rocket({ title, maneno, Ximg }) {
  return (
    <li className={styles.allInfo}>
      <img src={Ximg} alt="Rocket img" className={styles.img} />
      <div className={styles.rocketInfo}>
        <h6>{title}</h6>
        <p>{maneno}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </li>
  );
}

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  maneno: PropTypes.number.isRequired,
  Ximg: PropTypes.func.isRequired,
};

export default Rocket;
