import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

/**
 * Summary card for the cart table.
 * @param totalPrice
 * @param canProceedToCheckout
 * @param setShowForm
 * @returns {Element}
 * @constructor
 */
const PriceSummaryCard = ({ totalPrice, canProceedToCheckout, setShowForm }) => {
    return (
        <Card className="mt-4">
            <Card.Body>
                <Card.Title>Total Price: ${totalPrice.toFixed(2)}</Card.Title>
                {canProceedToCheckout ? (
                    <Button
                        variant="primary"
                        onClick={() => setShowForm(true)}
                    >
                        Proceed to Checkout
                    </Button>
                ) : (
                    <Alert variant="warning" className="mt-3">
                        Please add at least 2 toppings to each pizza before proceeding to checkout.
                    </Alert>
                )}
            </Card.Body>
        </Card>
    );
};

export default PriceSummaryCard;
