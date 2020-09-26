import React from 'react';
import { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Products from '../3Products/Products';
import Cart from '../4Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(first20);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey]
            return product
        })
        setCart(previousCart)
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1
        let newCart
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        setCart(newCart)

        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="Shop">
            <div className="product-container">
                {
                    products.map(pd => <Products
                        key={pd.key}
                        handler={handleAddProduct}
                        product={pd}
                        showAddToCart={true}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="cBtn">Review your order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;