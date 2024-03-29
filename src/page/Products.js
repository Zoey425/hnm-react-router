/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCard from '../component/ItemCard';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let keyword = query.get('q') || '';
        console.log('쿼리값은?', keyword);
        let url = `https://my-json-server.typicode.com/Zoey425/hnm-react-router/products?q=${keyword}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProductList(data);
    };

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div>
            <Container fluid>
                <Row>
                    {productList.map(item => (
                        <Col lg="3" key={item.id}>
                            <ItemCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
