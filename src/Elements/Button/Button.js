import React from 'react'
import './Button.css'

function Button({children, onPress }) {
  return (
    <div className='button' onClick={onPress}>
      {children}
    </div>
  )
}

export default Button
