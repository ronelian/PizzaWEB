import React from 'react';
import { Table } from 'react-bootstrap';

/**
 * Order summary component
 * @param order
 * @returns {React.JSX.Element}
 * @constructor
 */
const OrderSummary = ({ order }) => (
    <>
        <Table striped bordered hover className="mt-3 d-none d-md-table">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Street</th>
                <th>House Number</th>
                <th>City</th>
                <th>Phone Number</th>
                <th>Order Code</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{order.firstName}</td>
                <td>{order.lastName}</td>
                <td>{order.street}</td>
                <td>{order.houseNumber}</td>
                <td>{order.city}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.code}</td>
            </tr>
            </tbody>
        </Table>

        <Table striped bordered hover className="mt-3 d-md-none">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Street</th>
                <th>House Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{order.firstName}</td>
                <td>{order.lastName}</td>
                <td>{order.street}</td>
                <td>{order.houseNumber}</td>
            </tr>
            <tr>
                <td colSpan="2"><strong>City</strong></td>
                <td colSpan="2">{order.city}</td>
            </tr>
            <tr>
                <td colSpan="2"><strong>Phone Number</strong></td>
                <td colSpan="2">{order.phoneNumber}</td>
            </tr>
            <tr>
                <td colSpan="2"><strong>Order Code</strong></td>
                <td colSpan="2">{order.code}</td>
            </tr>
            </tbody>
        </Table>
    </>
);

export default OrderSummary;
