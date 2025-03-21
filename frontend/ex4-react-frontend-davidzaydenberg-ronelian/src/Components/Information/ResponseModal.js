import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';

/**
 * Response modal for the fetch
 * @param show
 * @param onHide
 * @param response
 * @returns {Element}
 * @constructor
 */
const ResponseModal = ({ show, onHide, response }) => {
    /**
     * Return appropriate response depending on the fetch response
     * @returns {Element}
     */
    const getMessage = () => {
        if (response && response.success)
            return <Alert variant="success">{response.success}</Alert>;
        else if (response && response.error)
            return <Alert variant="danger">{response.error}</Alert>;
        else
            return <Alert variant="danger">An unexpected error occurred. Please try again later.</Alert>;
    };

    /**
     * Render modal
     */
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Order Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>{getMessage()}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ResponseModal;
