import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" className='logo' />
      <ul className='header-list'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>programs</a></li>
        <li><a href='#'>why us</a></li>
        <li><a href='#'>plans</a></li>
        <li><a href='#'>Testimonials</a></li>
      </ul>
    </div>
  )
}

export default Header
