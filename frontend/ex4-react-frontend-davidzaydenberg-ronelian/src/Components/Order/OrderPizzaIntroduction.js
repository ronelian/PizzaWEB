import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/**
 * Order introduction component
 * @param isOrdering
 * @returns {Element}
 * @constructor
 */
const OrderPizzaIntroduction = ({ isOrdering }) => {
    return (
        <Container className="text-white mt-5">
            <Row>
                <Col>
                    {isOrdering ? (
                        <h1>Your Order</h1>
                    ) : (
                        <>
                            <h1>Order Pizza</h1>
                            <h3>Create your favorite pizza with two or more of our delicious toppings</h3>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default OrderPizzaIntroduction;
