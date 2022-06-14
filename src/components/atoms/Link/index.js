import React from 'react'
import './link.scss'

const Link = ({onclick, title}) => {
  return (
    <p className='link' onClick={onclick}>{title}</p>
  )
}

export default Link