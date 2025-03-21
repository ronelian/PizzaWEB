import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Common/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/Common/NotFound';
import Cart from './Components/Cart/Cart';
import OrderInformation from './Components/Information/OrderInformation';
import NavbarPizza from './Components/Navigation/NavbarPizza';
import CartContextProvider from './Context/CartContext';

/**
 * Main component of the application
 * @returns {Element}
 * @constructor
 */
function App() {
    return (
        <Container fluid className="App">
            <CartContextProvider>
                <BrowserRouter>
                    <NavbarPizza />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/orderinfo" element={<OrderInformation />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </Container>
    );
}

export default App;
