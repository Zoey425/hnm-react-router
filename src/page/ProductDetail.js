import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/Zoey425/hnm-react-router/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductDetail(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container fluid="sm">
            <Row>
                <Col className="pro-img">
                    <img src={productDetail?.img} alt={productDetail?.title} />
                </Col>
                <Col className="detailDisplay">
                    <div className={productDetail?.new === true ? 'cardImgNewDetail' : ''}>
                        {productDetail?.new === true ? 'NEW' : ''}
                    </div>
                    <div className="wrapTitlePrice">
                        <div className="detail-title">{productDetail?.title}</div>
                        <div className="detail-price">{productDetail?.price} 원</div>
                    </div>
                    <div className="dropDownWrap">
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="sizeBtn">
                                Size
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {Array.isArray(productDetail.size) &&
                                    productDetail.size.map((item, index) => (
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
