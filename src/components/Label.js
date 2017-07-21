import React from 'react'
import PropTypes from 'prop-types'


const Label = ({text, onClick, className}) => {
  return <label className={className}>{text}</label>

};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Label
