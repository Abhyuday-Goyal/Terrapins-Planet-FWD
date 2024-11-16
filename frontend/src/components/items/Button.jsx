import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // For handling links

const Button = ({ onClick, children, className, href }) => {
  const Component = href ? Link : 'button'; // Use Link if href is provided
  const props = href ? { to: href } : { onClick };

  return (
    <Component
      {...props}
      className={`py-2 px-6 rounded-lg text-white font-medium transition-transform duration-200 ease-in-out ${className}`}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string, // Added href prop type
};

Button.defaultProps = {
  onClick: null,
  className: 'bg-earth-green hover:bg-light-green',
  href: null, // Default to null when href is not provided
};

export default Button;
