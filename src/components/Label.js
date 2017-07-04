import React from 'react'
import PropTypes from 'prop-types'




const Label = ({text, onClick, className}) => {

  if (typeof onClick === 'function') {
    return (
      // eslint-disable-next-line
      <a href="#"
         onClick={e => {
           e.preventDefault()
           onClick()
         }}
      >
        {text}
      </a>
    )
  } else return (
    <span className={className}>{text}</span>
  )

}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className:PropTypes.string
}

export default Label
