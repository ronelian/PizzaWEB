import React, { useContext, useState } from 'react';
import { Container, Row, Col, Alert, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartTable from './CartTable';
import PriceSummaryCard from './PriceSummaryCard';
import PurchaseForm from './PurchaseForm';
import OrderConfirmationModal from './OrderConfirmationModal';
import { CartContext } from '../../Context/CartContext';
import useToppings from '../../Hooks/useToppings';

/**
 * Cart component
 * @returns {Element}
 * @constructor
 */
const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { loading } = useToppings();

    const [showForm, setShowForm] = useState(false);
    const [orderResponse, setOrderResponse] = useState(null);

    const totalPrice = cartItems.reduce((total, pizza) => total + pizza.totalPrice, 0);
    const canProceedToCheckout = cartItems.every(pizza => pizza.toppings.length >= 2);

    /**
     * Render the Cart/purchase form
     */
    return (
        <div>
            <video autoPlay muted loop className="background-video">
                <source src="/pizza_video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Container className="text-white">
                <Row><Col><h2 className="my-4">Your Cart</h2></Col></Row>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="/loader.gif" alt="Loading..."/>
                    </div>
                ) : cartItems.length === 0 ? (
                    <Container>
                        <Alert variant="info">
                            Your cart is empty.
                        </Alert>
                        <Nav.Link as={Link} to="/">
                            <Button variant="primary" className="mt-3">Order a Pizza</Button>
                        </Nav.Link>
                    </Container>
                ) : (
                    <Container>
                        <CartTable/>
                        <PriceSummaryCard
                            totalPrice={totalPrice}
                            canProceedToCheckout={canProceedToCheckout}
                            setShowForm={setShowForm}
                        />
                        {showForm && (
                            <Container>
                                <PurchaseForm
                                    totalPrice={totalPrice}
                                    setOrderResponse={setOrderResponse}
                                    setCartItems={setCartItems}
                                    setShowForm={setShowForm}
                                />
                            </Container>
                        )}
                    </Container>
                )}
                {orderResponse && (
                    <OrderConfirmationModal
                        show={true}
                        onHide={() => setOrderResponse(null)}
                        orderResponse={orderResponse}
                    />
                )}
            </Container>
        </div>
    );
};

export default Cart;