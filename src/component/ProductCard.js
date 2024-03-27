import React from 'react';

const ProductCard = ({ productList }) => {
    return (
        <div>
            <img alt={productList.title} src={productList.img} />
            <div>{productList.title}</div>
            <div>{productList.price}</div>
            <div>{productList.true}</div>
        </div>
    );
};

export default ProductCard;
