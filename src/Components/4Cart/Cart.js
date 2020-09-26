import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);
    // let total = cart.reduce((total, prd) => total + prd.price, 0);
    // total = total * prd.quantity
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity
    }

    let shipping = 0;
    if (total > 1000) {
        shipping = 0;
    }
    else if (total > 0) {
        shipping = total / 10
    }

    const tax = total / 5
    const grandTotal = total + shipping + tax
    const totalBeforeTax = total + shipping

    const formetNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }

    return (
        <div className="Cart">
            <h3>Order Summary</h3>
            <h6>Ordered items: {cart.length}</h6>
            <div className="cartContainer">
                <div className="cart-props">
                    <p>Items:</p>
                    <p>Shipping:</p>
                    <p>Total before tax:</p>
                    <p>Estimated Tax:</p>
                    <h5>Order Total:</h5>
                </div>
                <div className="cart-values">
                    <p>${formetNumber(total)}</p>
                    <p>${formetNumber(shipping)}</p>
                    <p>${formetNumber(totalBeforeTax)}</p>
                    <p>${formetNumber(tax)}</p>
                    <h5>${formetNumber(grandTotal)}</h5>
                </div>
            </div>
            {
                props.children
            }
        </div>
    );
};

export default Cart;