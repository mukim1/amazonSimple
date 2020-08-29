import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order</a>
                    <a href="/manage">Manage Imventory</a>
                </ul>
            </nav>
            <div className="scerch">
                <input placeholder="scerch your product here"></input>
                <i class="fas fa-cart-plus"></i>
            </div>
        </div>
    );
};

export default Header;