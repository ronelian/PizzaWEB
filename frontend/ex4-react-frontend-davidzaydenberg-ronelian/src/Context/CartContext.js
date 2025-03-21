import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

/**
 * Cart Context Provider
 * @param children
 * @returns {Element}
 * @constructor
 */
const CartContextProvider = ({ children }) => {
    /**
     * Initialize cart items from local storage
     */
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    /**
     * Save cart items to local storage
     */
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    /**
     * Add item to cart
     * @param item
     */
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    /**
     * Remove item from cart
     * @param itemIndex
     */
    const removeFromCart = (itemIndex) => {
        const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
        setCartItems(updatedCart);
    };

    /**
     * Render Cart Context Provider
     */
    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
