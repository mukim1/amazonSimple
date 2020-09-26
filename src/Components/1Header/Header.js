import React from 'react';
import './Header.css'
import logo from '../../images/logo1.png'

const Header = () => {
    return (
        <div className="Head">
            <div className="header">
            <div className="nav-left">
                <i className="fas fa-bars"></i>
                <a href="home"><img src={logo} alt="" /></a>
            </div>
            <div className="nav-center">
                <input className="form-control" type="text" />
            </div>
            <div className="nav-right">
                <div className="sign-in">
                    <span>Hello, Sign in</span>
                    <h4>Account & Lists</h4>
                </div>
                <div className="order">
                    <span>Returns</span>
                    <h4>& Orders</h4>
                </div>
                <div className="cart">
                    <span><i className="fas fa-cart-plus"></i></span>
                    <h4>Cart</h4>
                </div>
            </div>
        </div>
        <div className="location">
            <div>
            <i className="fas fa-map-marker-alt"></i>
            <p>Bangladesh</p>
            </div>
            <div className="menu">
                <ul>
                    <a href="home">Home</a>
                    <a href="shop">Shop</a>
                    <a href="review">Order</a>
                    <a href="inventory">Inventory</a>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Header;