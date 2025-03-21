package com.ex4backendspring.model;

import java.util.List;

/**
 * This class represents an order.
 * An order contains information about the customer and the pizzas they ordered.
 */
public class Order {
    private String code;
    private String firstName;
    private String lastName;
    private String street;
    private String houseNumber;
    private String city;
    private String phoneNumber;
    private List<Pizza> pizzas;

    /**
     * Get the code of the order
     * @return code
     */
    public String getCode() {
        return code;
    }

    /**
     * Set the code of the order
     * @param code order code
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * Get the first name of the customer
     * @return first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Get the last name of the customer
     * @return last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Get the street of the customer
     * @return street
     */
    public String getStreet() {
        return street;
    }

    /**
     * Get the house number of the customer
     * @return house number
     */
    public String getHouseNumber() {
        return houseNumber;
    }

    /**
     * Get the city of the customer
     * @return city
     */
    public String getCity() {
        return city;
    }

    /**
     * Get the phone number of the customer
     * @return phone number
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * Get the pizzas in the order
     * @return pizzas
     */
    public List<Pizza> getPizzas() {
        return pizzas;
    }
}
