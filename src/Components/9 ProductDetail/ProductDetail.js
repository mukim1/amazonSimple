import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Products from '../3Products/Products';
import './ProductDetail.css'

const ProductDetail = () => {
    const { productKey } = useParams()
    const pd = fakeData.find(pd => pd.key === productKey)
    // console.log(pd);

    return (
        <div className="pdd">
            {/* <h3> {productKey} Product detail comming soon</h3> */}
            {/* <Products showAddToCart={false} product={pd}></Products> */}
            <div className="img-container">
                <img src={pd.img} alt="" />
            </div>
            <div className="content-container">
                <h3>{pd.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus deserunt iste architecto quibusdam totam error magni obcaecati, pariatur quaerat eum, dolorem quos officia beatae, impedit quam sapiente aliquid doloremque ipsam veritatis odio. Necessitatibus quas enim consectetur doloremque ab quam eveniet explicabo consequuntur ratione, qui aut excepturi inventore praesentium ipsam natus.</p>
                <h5>Price: {pd.price}</h5>
                <h5>By: {pd.seller}</h5>
                <button className="cBtn">add to cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;