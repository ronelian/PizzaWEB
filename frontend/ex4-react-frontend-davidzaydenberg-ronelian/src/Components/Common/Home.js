import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import OrderPizzaIntroduction from '../Order/OrderPizzaIntroduction';
import Order from '../Order/Order';
import Toppings from '../Toppings/Toppings';
import './Home.css';
import ToppingContextProvider from '../../Context/ToppingContext';

/**
 * Home component
 * @returns {Element}
 * @constructor
 */
const Home = () => {
    /**
     * State to hold the order that in progress
     */
    const [orderInProgress, setOrderInProgress] = useState(() => {
        const localData = localStorage.getItem('orderInProgress');
        return localData ? JSON.parse(localData) : false;
    });

    /**
     * Save the order that in progress to local storage
     */
    useEffect(() => {
        localStorage.setItem('orderInProgress', JSON.stringify(orderInProgress));
    }, [orderInProgress]);

    /**
     * Render the Home component
     */
    return (
        <div>
            <video autoPlay muted loop className="background-video">
                <source src="/pizza_video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container fluid>
                <OrderPizzaIntroduction isOrdering={orderInProgress} />
                <ToppingContextProvider>
                    <Order setOrderInProgress={setOrderInProgress} />
                    {orderInProgress && <Toppings />}
                </ToppingContextProvider>
            </Container>
        </div>
    );
};

export default Home;
