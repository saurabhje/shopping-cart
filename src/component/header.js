import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='navbar'>
        <logo>
            <NavLink to="/" ></NavLink>
            <img className="logo" src={logo}  alt="logo" />
        </logo>
    </div>
  )
}

export default Header;