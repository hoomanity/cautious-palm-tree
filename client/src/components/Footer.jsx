import React from 'react'
import Logo from '../img/logo.jpg'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made with sleeping cats on keyboards and <b>React.js</b></span>
    </footer>
  )
}

export default Footer