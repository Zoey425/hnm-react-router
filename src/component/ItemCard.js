import React from 'react';

const ItemCard = ({ item }) => {
    const isItem = item?.new;
    return (
        <div key={item?.id} className="cardWarp">
            <div>
                <div className={isItem === true ? 'cardImgNew' : ''}>{isItem === true ? 'NEW' : ''}</div>
                <div className="cardImg">
                    <img src={item?.img} alt={item?.title} />
                </div>
            </div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
        </div>
    );
};

export default ItemCard;
