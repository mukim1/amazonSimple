import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, quantity, img, seller, key, price } = props.product
    return (
        <div className="ReviewItem">
            <div className="review-container">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="content">
                    <h3>{name}</h3>
                    <h6>Price: {price}</h6>
                    <p>Quantity: {quantity}</p>
                    <p>By: {seller}</p>
                    <button onClick={() => props.remove(key)} className="cBtn">Remove Item</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;