import React from 'react'
import PropTypes from 'prop-types'




const Label = ({text, onClick, className}) => {

  if (typeof onClick === 'function') {
    return (
      // eslint-disable-next-line
      <label
         onClick={e => {
           e.preventDefault();
           onClick()
         }}
      >{text}</label>
    )
  } else return (
    <label className={className}>{text}</label>
  )
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className:PropTypes.string
};

export default Label
