import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import './NavbarPizza.css';

/**
 * Navigation bar for the website
 * @returns {Element}
 * @constructor
 */
const NavbarPizza = () => {
    const { cartItems } = useContext(CartContext);
    const [navBackground, setNavBackground] = useState('transparent');
    const [expanded, setExpanded] = useState(false);

    /**
     * Change to desired background color
     */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavBackground('rgba(0, 0, 0, 0.8)');
            } else {
                setNavBackground('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
     * Toggle the navbar
     */
    const handleToggle = () => {
        setExpanded(!expanded);
    };

    /**
     * Render the navbar
     */
    return (
        <Navbar
            expand="lg"
            sticky="top"
            style={{ height: '100px', backgroundColor: navBackground, transition: 'background-color 0.3s ease' }}
            expanded={expanded}
            onToggle={handleToggle}
            className="navbar-custom"
        >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/light-logo.png"
                        width="90"
                        height="60"
                        className="d-inline-block align-top"
                        alt="PizzaHot Logo"
                    />
                    <span style={{ marginLeft: '15px', fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>PizzaHot</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-white fw-bold">Home</Nav.Link>
                        <Nav.Link as={Link} to="/orderinfo" className="text-white fw-bold">Order Information</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/cart" className="text-white fw-bold position-relative">
                            <FaShoppingCart size={30} />
                            {cartItems.length > 0 && (
                                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    {cartItems.length}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPizza;
