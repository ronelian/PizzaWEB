import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * Modal for adding order to cart modal
 * @param show
 * @param onHide
 * @returns {Element}
 * @constructor
 */
const AddToCartModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Pizza Added to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Your pizza has been successfully added to the cart.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddToCartModal;
