/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCard from '../component/ItemCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const Products = () => {
    const productList = useSelector(state => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = async () => {
        let keyword = query.get('q') || '';
        console.log('쿼리값은?', keyword);
        dispatch(productAction.getProducts(keyword));
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
