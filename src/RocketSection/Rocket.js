/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Rocket.module.css';
import { makeReservation, cancelReservation } from '../reduxStore/rockets';

function Rocket({
  title, maneno, Ximg, id, reservation,
}) {
  const dispatch = useDispatch();

  const update = () => {
    dispatch(makeReservation(id));
  };

  const cancel = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <li className={styles.allInfo}>
      <img src={Ximg} alt="Rocket img" className={styles.img} />
      <div className={styles.rocketInfo}>
        <h2 className={styles.rocketTitle}>{title}</h2>
        <p>{reservation ? <p className={styles.Badge}>Reserved</p> : null } {maneno}</p>
        {reservation ? <button className={styles.cancel} onClick={cancel} type="button">Cancel Reservation</button> : <button className={styles.make} onClick={update} type="button">Reserve Rocket</button>}
      </div>
    </li>
  );
}

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  maneno: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  Ximg: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  reservation: PropTypes.bool,
};

Rocket.defaultProps = {
  reservation: false,
  maneno: 'Space X',
};

export default Rocket;
