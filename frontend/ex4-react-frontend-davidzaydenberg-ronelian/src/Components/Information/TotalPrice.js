import React from 'react';
import { Table } from 'react-bootstrap';

/**
 * Show total price of the whole order (All pizzas)
 * @param pizzas
 * @returns {Element}
 * @constructor
 */
const TotalPrice = ({ pizzas }) => {
    /**
     * Calculate total price of all pizzas in the order
     * @param pizzas
     * @returns {*}
     */
    const calculateTotalPrice = (pizzas) => {
        return pizzas.reduce((total, pizza) => total + pizza.totalPrice, 0);
    };

    /**
     * Render total price
     */
    return (
        <Table striped bordered hover className="mt-3">
            <thead>
            <tr>
                <th>Total Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${calculateTotalPrice(pizzas).toFixed(2)}</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default TotalPrice;
