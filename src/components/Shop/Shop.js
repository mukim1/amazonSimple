import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        console.log('add to cart clicked', product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="Shop">
            <div className="products-container">
            {
                products.map(pd => <Product pro={pd} addToCart={addToCart}>

                </Product>)
            }
            </div>
            <div className="cart-conta">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;