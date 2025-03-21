import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import OrderDetailsTable from './OrderDetailsTable';
import ResponseModal from './ResponseModal';
import {OrderErrors} from "../../Utils/errors";

/**
 * Order information page component
 * @returns {Element}
 * @constructor
 */
const OrderInformation = () => {
    const [loading, setLoading] = useState(false);
    const [orderCode, setOrderCode] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    const handleInputChange = (e) => setOrderCode(e.target.value);

    /**
     * Set the current error with its message and show modal.
     */
    useEffect(() => {
        if (error) {
            setResponseMessage({ error });
            setModalShow(true);
        }
    }, [error]);

    /**
     * Fetch an order from the server api with appropriate code
     * @param event
     * @returns {Promise<void>}
     */
    const handleSearch = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setLoading(true); // Start loading
            try {
                const response = await fetch(`/api/order/${orderCode}`);
                if (!response.ok)
                    throw new Error(OrderErrors.ORDER_NOT_FOUND);

                const data = await response.json();
                setOrder(data);
                setError('');
            } catch (error) {
                console.error('Error:', error);
                setOrder(null);
                setError(OrderErrors.ORDER_NOT_FOUND);
            } finally {
                setLoading(false); // Stop loading
            }
        }
        setValidated(true);
    };

    /**
     * When closing modal, clear errors so that the modal can be shown again
     */
    const handleModalClose = () => {
        setModalShow(false);
        setError('');
    };

    /**
     * Render the order info
     */
    return (
        <div>
            <video autoPlay muted loop className="background-video">
                <source src="/pizza_video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Container className="text-white">
                <Row>
                    <Col>
                        <h1>Order Status</h1>
                    </Col>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSearch}>
                    <Form.Group controlId="orderCode">
                        <Form.Label>Order Code</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter your order code"
                            value={orderCode}
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid order code.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className="mt-3" variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                        <img src="/loader.gif" alt="Loading..." />
                    </div>
                ) : (
                    <Row>
                        <Col>
                            {order && <OrderDetailsTable order={order} />}
                        </Col>
                    </Row>
                )}
                <ResponseModal show={modalShow} onHide={handleModalClose} response={responseMessage} />
            </Container>
        </div>
    );
};

export default OrderInformation;
