import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NotFound.css';

/**
 * NotFound component
 * This component is rendered when the user tries to access a page that doesn't exist
 * @returns {JSX.Element}
 * @constructor
 */
export default function NotFound() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center not-found-container">
            <Card className="p-5 text-center" style={{ maxWidth: '800px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Card.Body>
                    <Card.Title className="display-4">Page not found!</Card.Title>
                    <Card.Text className="lead">
                        Back to <Link to='/' className="text-decoration-underline">home page</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}
