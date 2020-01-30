import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <button className={} type="button">{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
