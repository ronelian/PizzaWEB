import React, { useContext } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import useToppings from "../../Hooks/useToppings";

/**
 * Cart table consists of all pizza orders
 * @returns {Element}
 * @constructor
 */
const CartTable = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { availableToppings } = useToppings();

    /**
     * Save the cart to local memory
     * @param updatedCart
     */
    const saveCart = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    /**
     * Remove pizza from cart and save again.
     * @param index
     */
    const removePizza = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        saveCart(updatedCart);
    };

    /**
     * Remove toppings from the pizza
     * @param pizzaIndex
     * @param toppingIndex
     */
    const removeTopping = (pizzaIndex, toppingIndex) => {
        const updatedCart = [...cartItems];
        updatedCart[pizzaIndex].toppings = updatedCart[pizzaIndex].toppings.filter((_, i) => i !== toppingIndex);
        if (updatedCart[pizzaIndex].toppings.length === 0)
            removePizza(pizzaIndex);
        else {
            updatedCart[pizzaIndex].totalPrice = updatedCart[pizzaIndex].toppings.reduce((total, topping) => total + topping.price, 10);
            saveCart(updatedCart);
        }
    };

    /**
     * Add topping to the pizza
     * @param pizzaIndex
     * @param topping
     */
    const handleAddTopping = (pizzaIndex, topping) => {
        if(topping)
        {
            const updatedCart = [...cartItems];
            updatedCart[pizzaIndex].toppings.push({ ...topping, quantity: 1 });
            updatedCart[pizzaIndex].totalPrice += topping.price;
            saveCart(updatedCart);
        }
    };

    /**
     * Render the cart table
     */
    return (
        <Table striped bordered hover className="text-start">
            <thead>
            <tr>
                <th>Pizza No.</th>
                <th>Topping</th>
                <th>Price</th>
                <th>Add Topping</th>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((pizza, pizzaIndex) => (
                <React.Fragment key={pizzaIndex}>
                    {pizza.toppings.map((topping, toppingIndex) => (
                        <tr key={`${pizzaIndex}-${toppingIndex}`}>
                            <td>{pizzaIndex + 1}</td>
                            <td className="d-flex justify-content-between">{topping.name}
                                <Button variant="danger" onClick={() => removeTopping(pizzaIndex, toppingIndex)}>x</Button>
                            </td>
                            <td>${topping.price.toFixed(2)}</td>
                            {toppingIndex === 0 && (
                                <td rowSpan={pizza.toppings.length}>
                                    <Form.Control
                                        as="select"
                                        onChange={(e) => handleAddTopping(pizzaIndex, availableToppings.find(ing => ing.name === e.target.value))}
                                    >
                                        <option value="">Select a topping</option>
                                        {availableToppings.filter(ing => !pizza.toppings.some(item => item.name === ing.name)).map(topping => (
                                            <option key={topping.name} value={topping.name}>{topping.name}</option>
                                        ))}
                                    </Form.Control>
                                </td>
                            )}
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="5" className="text-center">
                            <Button variant="dark" onClick={() => removePizza(pizzaIndex)}>Remove Pizza</Button>
                        </td>
                    </tr>
                </React.Fragment>
            ))}
            </tbody>
        </Table>
    );
};

export default CartTable;
