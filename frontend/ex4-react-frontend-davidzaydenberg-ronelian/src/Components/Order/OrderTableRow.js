import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Row in the order table
 * @param topping
 * @param index
 * @param removeTopping
 * @returns {Element}
 * @constructor
 */
const OrderTableRow = ({ topping, index, removeTopping }) => {
    return (
        <tr>
            <td className="d-flex justify-content-between">{topping.name}
                <Button variant="danger" onClick={() => removeTopping(index)}>x</Button>
            </td>
            <td className="text-start">${(topping.price).toFixed(2)}</td>
        </tr>
    );
};

export default OrderTableRow;
