import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { ValidityErrors } from '../Utils/errors';

/**
 * Custom useEffect for form validation
 * @returns {{validateForm: (function(): boolean), formErrors: {}, formData: {firstName: string, lastName: string, phoneNumber: string, city: string, street: string, houseNumber: string}, handleInputChange: handleInputChange}}
 */
const useFormValidation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        houseNumber: '',
        city: '',
        phoneNumber: '',
    });
    const [formErrors, setFormErrors] = useState({});

    /**
     * load saved user data from cookies and populate
     * the form fields with this data.
     */
    useEffect(() => {
        const savedFormData = Cookies.get('userDetails');
        if (savedFormData)
            setFormData(JSON.parse(savedFormData));
    }, []);

    /**
     * Grab value from input and set in into the form
     * @param e
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    /**
     * Validate form input
     * @returns {boolean}
     */
    const validateForm = () => {
        let errors = {};
        if (!formData.firstName) errors.firstName = ValidityErrors.FIRST_NAME_REQUIRED;
        if (!formData.lastName) errors.lastName = ValidityErrors.LAST_NAME_REQUIRED;
        if (!formData.street) errors.street = ValidityErrors.STREET_REQUIRED;
        if (!formData.houseNumber) errors.houseNumber = ValidityErrors.HOUSE_NUMBER_REQUIRED;
        if (!formData.city) errors.city = ValidityErrors.CITY_REQUIRED;
        if (!formData.phoneNumber)
            errors.phoneNumber = ValidityErrors.PHONE_NUMBER_REQUIRED;
        else if (!/^\d{10}$/.test(formData.phoneNumber))
            errors.phoneNumber = ValidityErrors.INVALID_PHONE_NUMBER;
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return { formData, formErrors, handleInputChange, validateForm };
};

export default useFormValidation;
