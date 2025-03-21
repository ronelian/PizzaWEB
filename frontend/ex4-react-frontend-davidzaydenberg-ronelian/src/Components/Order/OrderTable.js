import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { ToppingContext } from "../../Context/ToppingContext";
import OrderTableRow from './OrderTableRow';

/**
 * Table of the order that contains the toppings
 * @returns {Element}
 * @constructor
 */
const OrderTable = () => {
    const { orderToppings, setOrderToppings } = useContext(ToppingContext);

    /**
     * Remove topping from the table order
     * @param index
     */
    const removeTopping = (index) => {
        setOrderToppings(prevToppings => prevToppings.filter((_, i) => i !== index));
    };

    /**
     * Render toppings order table
     */
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th className="text-start">Toppings</th>
                <th className="text-start">Price</th>
            </tr>
            </thead>
            <tbody>
            {orderToppings.map((topping, index) => (
                <OrderTableRow
                    key={index}
                    topping={topping}
                    index={index}
                    removeTopping={removeTopping}
                />
            ))}
            </tbody>
        </Table>
    );
};

export default OrderTable;
