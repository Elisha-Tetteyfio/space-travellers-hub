import React from 'react';
import PropTypes from 'prop-types';

function RocketsProfile({ name }) {
  return (
    <>
      <li>{name}</li>
    </>
  );
}

RocketsProfile.propTypes = {
  name: PropTypes.string.isRequired,
};
export default RocketsProfile;
