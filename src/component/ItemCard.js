import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
    const isItem = item?.new;
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };
    return (
        <div key={item.id} className="cardWarp" onClick={showDetail}>
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
