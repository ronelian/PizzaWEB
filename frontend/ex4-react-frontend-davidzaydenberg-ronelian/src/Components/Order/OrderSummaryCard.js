import React, { useContext } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { ToppingContext } from '../../Context/ToppingContext';

/**
 * Card summary for the order component
 * @param basePrice
 * @param totalPrice
 * @param handleAddToCart
 * @param handleDeleteOrder
 * @returns {Element}
 * @constructor
 */
const OrderSummaryCard = ({ basePrice, totalPrice, handleAddToCart, handleDeleteOrder }) => {
    const { orderToppings } = useContext(ToppingContext);

    /**
     * Render the summary
     */
    return (
        <Card className="mt-4" style={{ minWidth: '200px' }}>
            <Card.Body>
                <Card.Text>Base Price: ${basePrice.toFixed(2)}</Card.Text>
                <Card.Title>Total Price: ${totalPrice.toFixed(2)}</Card.Title>
                {orderToppings.length < 2 && (
                    <Alert variant="warning" className="mt-3">
                        Please add at least 2 toppings to your pizza before adding to cart.
                    </Alert>
                )}
                <div className="d-flex justify-content-between">
                    <Button
                        variant="primary"
                        onClick={handleAddToCart}
                        disabled={orderToppings.length < 2}
                    >
                        Add to Cart
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleDeleteOrder}
                    >
                        Delete Order
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default OrderSummaryCard;
