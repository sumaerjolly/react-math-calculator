import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide, clickHandler }) => {

  const handleClick = name => clickHandler(name);
  return (
    <button
      className={wide ? 'wide' : 'not-wide'}
      style={{ backgroundColor: color }}
      type="button"
      onClick={() => {
        handleClick(name);
      }}
    >
      {name}
    </button>
  );

};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired
};

Button.defaultProps = {
  color: '#f3913e'
};

export default Button;
