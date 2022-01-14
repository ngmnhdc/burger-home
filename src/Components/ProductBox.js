import React from 'react'

function ProductBox(props) {
    return (
        <div className="product-box">
            <div className="product-box-img">
                <img src={ props.image } alt="" />
            </div>
            <div className="product-box-text">
                <h2>{ props.title }</h2>
                <button className="product-box-btn">Order Now</button>
            </div>
        </div>
    )
}

export default ProductBox
