import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { img, name, price, seller, stock } = props.pro
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="product" />
            </div>
            <div className="product-content">
                <h2 className="procuct-name">{name}</h2>
                <h5>${price}</h5>
                <p><small>by: {seller}</small></p>
                <p>only {stock} in stock - order soon</p>
                <button className="product-btn" onClick={() => props.addToCart(props.pro)}><i className="fas fa-shopping-cart"></i> add to cart</button>
            </div>
        </div>
    );
};

export default Product;