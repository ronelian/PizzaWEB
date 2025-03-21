import { createContext, useState, useEffect } from "react";

export const ToppingContext = createContext();

/**
 * Context provider for toppings
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const ToppingContextProvider = ({ children }) => {
    /**
     * State for order toppings
     */
    const [orderToppings, setOrderToppings] = useState(() => {
        const localData = localStorage.getItem('orderToppings');
        return localData ? JSON.parse(localData) : [];
    });

    /**
     * Save order toppings to local storage
     */
    useEffect(() => {
        localStorage.setItem('orderToppings', JSON.stringify(orderToppings));
    }, [orderToppings]);

    /**
     * Render the context provider
     */
    return (
        <ToppingContext.Provider value={{ orderToppings, setOrderToppings }}>
            {children}
        </ToppingContext.Provider>
    );
};

export default ToppingContextProvider;