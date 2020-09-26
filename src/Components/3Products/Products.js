import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, star, key } = props.product
    return (
        <div className="Products">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-content">
                <h4><Link to={"/" + key}>{name}</Link></h4>
                <div className="bottom-content">
                    <div className="left-content">
                        <p><small>by: {seller}</small></p>
                        <p>Price: {price}</p>
                        <p><small>Only {stock} left in stock - Order soon</small></p>
                        { props.showAddToCart && <button
                            onClick={() => props.handler(props.product)}
                            className="cBtn"
                        > <i className="fas fa-shopping-cart"></i> Add to cart</button>}
                    </div>
                    <div>
                        <h6>Star: {star}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;