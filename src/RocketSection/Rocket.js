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
        <h6>{title}</h6>
        {reservation ? <p>Reserved</p> : null }
        <p>{maneno}</p>
        {reservation ? <button onClick={cancel} type="button">Cancel Reservation</button> : <button onClick={update} type="button">Make Reservation</button>}
      </div>
    </li>
  );
}

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  maneno: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  Ximg: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  reservation: PropTypes.bool.isRequired,
};

export default Rocket;
