import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const getProductDetail = async () => {
        let url = `http://localhost:3004/products/${id}`;
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
                <Col>
                    <div className="detail-title">{productDetail?.title}</div>
                    <div className="detail-price">{productDetail?.price} 원</div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                    <Button variant="dark" className="detail-get-button">
                        구매하기
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
