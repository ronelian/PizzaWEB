import React from 'react';
import Container from 'react-bootstrap/Container';
import OrderSummary from './OrderSummary';
import PizzaDetails from './PizzaDetails';
import TotalPrice from './TotalPrice';

/**
 * Whole table component of the order that is loaded with order code
 * @param order
 * @returns {Element}
 * @constructor
 */
const OrderDetailsTable = ({ order }) => {
    return (
        <Container>
            <OrderSummary order={order} />
            <PizzaDetails pizzas={order.pizzas} />
            <TotalPrice pizzas={order.pizzas} />
        </Container>
    );
};

export default OrderDetailsTable;
