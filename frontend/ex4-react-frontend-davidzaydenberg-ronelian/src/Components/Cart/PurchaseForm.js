import React from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import Cookies from 'js-cookie';
import useFormValidation from "../../Hooks/useFormValidation";
import useToppings from "../../Hooks/useToppings";
import { FetchingErrors } from "../../Utils/errors";

/**
 * Purchase form - Personal information component
 * @param totalPrice
 * @param setOrderResponse
 * @param setCartItems
 * @param setShowForm
 * @returns {Element}
 * @constructor
 */
const PurchaseForm = ({ totalPrice, setOrderResponse, setCartItems, setShowForm }) => {
    const { formData, formErrors, handleInputChange, validateForm } = useFormValidation();
    const { setLoading } = useToppings();

    /**
     * Post fetch for purchasing the pizzas
     * @returns {Promise<void>}
     */
    const handleCompletePurchase = async () => {
        if (validateForm()) {
            setLoading(true);
            const order = {
                ...formData,
                pizzas: JSON.parse(localStorage.getItem('cart')) || []
            };

            try {
                const response = await fetch('/api/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(order),
                });

                const contentType = response.headers.get('content-type');
                let data;
                if (contentType && contentType.indexOf('application/json') !== -1)
                    data = await response.json();
                else
                    data = await response.text();

                if (response.ok) {
                    setOrderResponse({ success: data });
                    Cookies.set('userDetails', JSON.stringify(formData), { expires: 7 }); // Expires in 7 days
                    setCartItems([]);
                    localStorage.removeItem('cart');
                    setShowForm(false);
                } else throw new Error(data);
            } catch (error) {
                console.error('Error:', error);
                setOrderResponse({ error: FetchingErrors.SERVER_ERROR });
            } finally {
                setLoading(false);
            }
        }
    };

    /**
     * Render purchase form
     */
    return (
        <Container className="my-4">
            <Card className="p-4 shadow-sm" style={{ border: '1px solid #dee2e6', borderRadius: '10px' }}>
                <Card.Body>
                    <Row><Col><h3 className="mb-4 text-center">Enter Your Details</h3></Col></Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formStreet">
                            <Form.Label>Street</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter street"
                                name="street"
                                value={formData.street}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.street}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.street}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHouseNumber">
                            <Form.Label>House Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter house number"
                                name="houseNumber"
                                value={formData.houseNumber}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.houseNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.houseNumber}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.city}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.city}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.phoneNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.phoneNumber}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <h4 className="my-4 text-center">Total Price: ${totalPrice.toFixed(2)}</h4>
                        <Button variant="primary" onClick={handleCompletePurchase} className="w-100">
                            Complete Purchase
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PurchaseForm;
