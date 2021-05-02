import React from 'react'

function SingleProduct({product}) {
    return (
        <div className="product_card">
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
        </div>
    )
}

export default SingleProduct
