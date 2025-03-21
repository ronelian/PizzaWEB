import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import OrderTable from './OrderTable';
import OrderSummaryCard from './OrderSummaryCard';
import AddToCartModal from './AddToCartModal';
import { ToppingContext } from '../../Context/ToppingContext';
import { CartContext } from '../../Context/CartContext';

/**
 * Order component
 * @param setOrderInProgress
 * @returns {Element}
 * @constructor
 */
const Order = ({ setOrderInProgress }) => {
    const { orderToppings, setOrderToppings } = useContext(ToppingContext);
    const { addToCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    /**
     * Load an order if already in progress
     */
    const [isOrdering, setIsOrdering] = useState(() => {
        const localData = localStorage.getItem('orderInProgress');
        return localData ? JSON.parse(localData) : false;
    });

    const basePrice = 10;

    /**
     * Calculate the full price of the order
     */
    const totalPrice = orderToppings.reduce((total, topping) => total + topping.price, basePrice);

    /**
     * Add order to cart
     */
    const handleAddToCart = () => {
        addToCart({ toppings: orderToppings, totalPrice });
        setOrderToppings([]);
        setShowModal(true);
        setIsOrdering(false);
        setOrderInProgress(false);
    };

    /**
     * Delete order from the order list
     */
    const handleDeleteOrder = () => {
        setOrderToppings([]);
        setIsOrdering(false);
        setOrderInProgress(false);
    };

    /**
     * Show the order and allow to start ordering + adding toppings for the pizza
     */
    const handleNewPizza = () => {
        setOrderToppings([]);
        setIsOrdering(true);
        setOrderInProgress(true);
    };

    /**
     * If in order in progress show the order in main page
     */
    useEffect(() => {
        localStorage.setItem('orderInProgress', JSON.stringify(isOrdering));
    }, [isOrdering]);

    /**
     * Save the current order to local memory
     */
    useEffect(() => {
        localStorage.setItem('orderToppings', JSON.stringify(orderToppings));
    }, [orderToppings]);

    /**
     * Render the order
     */
    return (
        <Container className="col-3 mt-3">
            {!isOrdering ? (
                <Row>
                    <Col>
                        <Button size="lg" variant="primary" onClick={handleNewPizza} className="mb-4">
                            Start a New Pizza
                        </Button>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col>
                        <OrderTable/>
                        <OrderSummaryCard
                            basePrice={basePrice}
                            totalPrice={totalPrice}
                            handleAddToCart={handleAddToCart}
                            handleDeleteOrder={handleDeleteOrder}
                        />
                    </Col>
                </Row>
            )}
            <AddToCartModal
                show={showModal}
                onHide={() => setShowModal(false)}
            />
        </Container>
    );
};

export default Order;
