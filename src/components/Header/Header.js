import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <div className='nav-img'>
                <img src={logo} alt="" />
            </div>

            <div className='nav-links'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to='/shipment'>Shipment</Link>
                <Link to="/about">About</Link>
                {
                    user ? <Link onClick={logOut}>Log Out</Link> : <Link to='/login'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;