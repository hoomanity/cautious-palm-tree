import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.jpg"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
          <Link className="link" to="/?cat=print"><h6>PRINT</h6></Link>
          <Link className="link" to="/?cat=ball"><h6>BALL</h6></Link>
          <Link className="link" to="/?cat=mango"><h6>MANGO</h6></Link>
          <Link className="link" to="/?cat=cat"><h6>CAT</h6></Link>
          <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
          <span>Hooman</span>
          <span>Logout</span>
          <span className='write'><Link className='link' to="/write">Write</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar