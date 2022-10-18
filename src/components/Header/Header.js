import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='nav-img'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-links'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register' >Register</Link>
            </div>
        </nav>
    );
};

export default Header;