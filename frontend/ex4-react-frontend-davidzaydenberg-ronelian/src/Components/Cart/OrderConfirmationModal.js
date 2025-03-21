import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import {FetchingErrors} from "../../Utils/errors";

/**
 * Order confirmation modal component
 * @param show
 * @param onHide
 * @param orderResponse
 * @returns {Element}
 * @constructor
 */
const OrderConfirmationModal = ({ show, onHide, orderResponse }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Order Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {orderResponse && orderResponse.success && (
                    <Alert variant="success">
                        Order placed successfully! Your order code is {orderResponse.success.code}.
                    </Alert>
                )}
                {orderResponse && orderResponse.error && (
                    <Alert variant="danger">
                        {typeof orderResponse.error === 'string'
                            ? orderResponse.error
                            : FetchingErrors.SERVER_ERROR}
                    </Alert>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderConfirmationModal;
