import {useContext} from 'react';
import { Card, Button } from 'react-bootstrap';
import {ToppingContext} from "../../Context/ToppingContext";

/**
 * Topping card component
 * @param topping
 * @returns {JSX.Element}
 * @constructor
 */
const ToppingCard = ({ topping }) => {
    const { setOrderToppings } = useContext(ToppingContext);

    /**
     * Add topping to order
     * @param topping
     */
    const addToppingToOrder = (topping) => {
        setOrderToppings(prevToppings => {
            const existingTopping = prevToppings.find(item => item.name === topping.name);
            if (existingTopping) {
                return prevToppings.map(item =>
                    item.name === topping.name ? { ...item } : item
                );
            }
            else
                return [...prevToppings, { ...topping }];
        });
    };

    /**
     * Render a cart of topping
     */
    return (
        <Card className="text-center">
            <Card.Img variant="top" src={topping.imageUrl} alt={topping.name} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: 'auto', paddingTop: '10px' }} />
            <Card.Body>
                <Card.Title>{topping.name}</Card.Title>
                <Card.Text>${topping.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => addToppingToOrder(topping)}>Add to Pizza</Button>
            </Card.Body>
        </Card>
    );
};

export default ToppingCard;
