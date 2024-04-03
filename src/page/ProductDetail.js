import React, { useEffect } from 'react';
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';
import { fetchProductDetail } from '../redux/reducers/ProductSlice';

const ProductDetail = () => {
    let { id } = useParams();
    const product = useSelector(state => state.product.selectedItem);
    const dispatch = useDispatch();
    const getProductDetail = async () => {
        dispatch(fetchProductDetail(id));
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    if (!product) {
        return <div>상품을 불러오는 중입니다...</div>;
    }

    return (
        <Container fluid="sm">
            <Row>
                <Col className="pro-img">
                    <img src={product?.img} alt={product?.title} />
                </Col>
                <Col className="detailDisplay">
                    <div className={product?.new === true ? 'cardImgNewDetail' : ''}>
                        {product?.new === true ? 'NEW' : ''}
                    </div>
                    <div className="wrapTitlePrice">
                        <div className="detail-title">{product?.title}</div>
                        <div className="detail-price">{product?.price} 원</div>
                    </div>
                    <div className="dropDownWrap">
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="sizeBtn">
                                Size
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {product.size &&
                                    Array.isArray(product.size) &&
                                    product.size.map((item, index) => (
                                        <Dropdown.Item key={index} href={item}>
                                            {item}
                                        </Dropdown.Item>
                                    ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Button variant="dark" className="detail-get-button detailBtn">
                        구매하기
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
