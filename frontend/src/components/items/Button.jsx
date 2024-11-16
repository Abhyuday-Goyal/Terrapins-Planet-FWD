import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 rounded-lg text-white font-medium transition-transform duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  className: 'bg-earth-green hover:bg-light-green',
};

export default Button;
