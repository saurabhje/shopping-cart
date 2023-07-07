import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='navbar'>
        <logo>
            <NavLink to="/" >
                <img className="logo" src={logo}  alt="logo" />
            </NavLink>
        </logo>
        <div className='links'>
            <home>
                <NavLink to={"/"} style={{ textDecoration: 'none',color: 'white'}}> Home </NavLink>
            </home>
            <shop>
                <NavLink to={"/shoppage"} style={{ textDecoration: 'none',color: 'white'}}> Shop</NavLink>
            </shop>
            <cart>
                <NavLink to={"/cart"} style={{ textDecoration: 'none',color: 'white',}}>Cart
                </NavLink>
            </cart>
        </div>
    </div>
  )
}


export default Header;