import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../10 ReviewItems/ReviewItem';
import Cart from '../4Cart/Cart';
import './Review.css'
import { Link } from 'react-router-dom';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([])
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts)
    }, [])

    const [orderPlaced, setOrderPlaced] = useState(false)

    const handlePlaceOrder = () => {
        setCart([])
        setOrderPlaced(true)
        processOrder()
    }

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="Review">
            <h2>Product Ordered: {cart.length}</h2>
            <div className="container">
                <div className="left">
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.key}
                            remove={removeProduct}
                            product={pd}></ReviewItem>)
                    }
                    {
                        thankYou
                    }
                </div>
                <div className="right">
                    <Cart cart={cart}>
                    <Link to="/review">
                        <button onClick={handlePlaceOrder} className="cBtn">Place order</button>
                    </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;