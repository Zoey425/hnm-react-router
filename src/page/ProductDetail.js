import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [productDetail, setProductDetail] = useState([]);
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
                    <div>{productDetail?.title}</div>
                    <div>{productDetail?.price}</div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
