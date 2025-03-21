import React from 'react';
import { Table } from 'react-bootstrap';

/**
 * Pizza information - toppings and price
 * @param pizzas
 * @returns {React.JSX.Element}
 * @constructor
 */
const PizzaDetails = ({ pizzas }) => (
    <Table striped bordered hover className="mt-3">
        <thead>
        <tr>
            <th>Pizza</th>
            <th>Toppings</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {pizzas.map((pizza, pizzaIndex) => (
            <tr key={pizzaIndex}>
                <td>{pizzaIndex + 1}</td>
                <td>
                    {pizza.toppings.map((topping, index) => (
                        <div key={index}>
                            {topping.name} (${topping.price.toFixed(2)})
                        </div>
                    ))}
                </td>
                <td>${pizza.totalPrice.toFixed(2)}</td>
            </tr>
        ))}
        </tbody>
    </Table>
);

export default PizzaDetails;
