import React from 'react'
import ProductBox from './ProductBox'
import image1 from '../images/s1.png'
import image2 from '../images/s2.png'
import '../Styles/Product.css'

function Products() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            <div className="product-container">
                <ProductBox image={ image1 } title="Luger Burger" />
                <ProductBox image={ image2 } title="Le Pigeon Burger" />
                <ProductBox image={ image1 } title="Luger Burger" />
            </div>
        </div>
    )
}

export default Products
