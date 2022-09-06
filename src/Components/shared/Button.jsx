import PropTypes from 'prop-types'
import React from 'react'
function Button({children, version, type, isDisabled}) {
  return (
<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
    {children}</button>
  )
}

Button.defaultProps = {
    version:'secondary', 
    type: 'button',
    isDisabled: false
}

 Button.propTypes = {
   children: PropTypes.node.isRequired,
//     // eslint-disable-next-line no-undef
   version: PropTypes.string,
   type: PropTypes.string,
    isDisabled: PropTypes.bool,

}
export default Button