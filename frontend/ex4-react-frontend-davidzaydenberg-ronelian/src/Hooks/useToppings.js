import { useState, useEffect } from 'react';
import { FetchingErrors } from '../Utils/errors';

/**
 * Custom use effect for fetching toppings
 * @returns {{setLoading: (value: (((prevState: boolean) => boolean) | boolean)) => void, availableToppings: *[], loading: boolean, error: boolean}}
 */
const useToppings = () => {
    const [availableToppings, setAvailableToppings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    /**
     * Fetch toppings from api
     */
    useEffect(() => {
        setLoading(true);
        fetch('/api/toppings')
            .then(response => {
                if (response.ok) return response.json();
                throw new Error(FetchingErrors.REQUEST_FAILED_ERROR);
            })
            .then(data => {
                setAvailableToppings(data);
                setError(false);
            })
            .catch(error => {
                console.error(FetchingErrors.FETCHING_TOPPINGS_ERROR, error);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, []);

    return { availableToppings, loading, error, setLoading };
};

export default useToppings;
