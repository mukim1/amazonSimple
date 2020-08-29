import React from 'react';

const Cart = (proos) => {
    const cart = proos.cart
    console.log(cart)
    const total = cart.reduce( (total, prd) => total + prd.price, 0)
    return (
        <div>
            <h2>This is Cart</h2>
            <h3>Item Ordered: {cart.length}</h3>
    <h4>Price: {total}</h4>
        </div>
    );
};

export default Cart;