import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCard from '../component/ItemCard';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = `https://my-json-server.typicode.com/Zoey425/hnm-react-router/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <Container fluid>
                <Row>
                    {productList.map(item => (
                        <Col lg="3">
                            <ItemCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
