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
            <div className="cardTitle">{item?.title}</div>
            <div className="cardPrice">{item?.price} 원</div>
        </div>
    );
};

export default ItemCard;
