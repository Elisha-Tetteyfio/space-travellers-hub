import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rocket.module.css';

function RocketsProfile({ name }) {
  return (
    <>
      <li className={styles.listItem}>{name}</li>
    </>
  );
}

RocketsProfile.propTypes = {
  name: PropTypes.string.isRequired,
};
export default RocketsProfile;
