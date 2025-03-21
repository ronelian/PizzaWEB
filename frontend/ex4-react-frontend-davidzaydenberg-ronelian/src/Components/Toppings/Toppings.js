import React from 'react';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import ToppingCard from './ToppingCard';
import useToppings from '../../Hooks/useToppings';

/**
 * Toppings component
 * @returns {Element}
 * @constructor
 */
const Toppings = () => {
    const { availableToppings: toppings, loading, error } = useToppings();

    /**
     * Render Toppings component
     */
    return (
        <Container className="text-white">
            <Row>
                <Col>
                    <h1 className="my-4">Toppings</h1>
                </Col>
            </Row>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <img src="/loader.gif" alt="Loading..." />
                </div>
            ) : error ? (
                <Row>
                    <Col>
                        <Alert variant="danger">
                            <h4>Error fetching toppings. Please try again later.</h4>
                        </Alert>
                    </Col>
                </Row>
            ) : (
                <Row>
                    {toppings.map((topping, index) => (
                        <Col key={index} xs={6} md={2} className="mb-4 d-flex justify-content-center">
                            <ToppingCard topping={topping} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Toppings;
