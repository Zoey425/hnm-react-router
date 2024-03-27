import React from 'react';

const ProductCard = ({ productList }) => {
    console.log('data', productList);

    return (
        <div className="cardWarp">
            {productList.map(pro => (
                <div key={pro.id} className="card">
                    <img src={pro.img} alt={pro.title} />
                    <div>{pro.title}</div>
                    <div>{pro.price}</div>
                    <div>{pro.true}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
