package com.ex4backendspring.util;

/**
 * This class contains constants used throughout the application.
 */
public class AppConstants {
    // Validation error messages
    public static final String ERROR_FIRST_NAME_REQUIRED = "First name is required";
    public static final String ERROR_LAST_NAME_REQUIRED = "Last name is required";
    public static final String ERROR_STREET_REQUIRED = "Street is required";
    public static final String ERROR_HOUSE_NUMBER_REQUIRED = "House number is required";
    public static final String ERROR_CITY_REQUIRED = "City is required";
    public static final String ERROR_PHONE_NUMBER_INVALID = "Phone number must be a 10-digit number";
    public static final String ERROR_AT_LEAST_ONE_PIZZA_REQUIRED = "At least one pizza is required";
    public static final String ERROR_PIZZA_TOPPINGS_REQUIRED = "Each pizza must have at least 2 toppings";
    public static final String ERROR_ORDER_NOT_FOUND = "Order not found";

    // Toppings
    public static final String BLACK_OLIVES_NAME = "Black olives";
    public static final String GREEN_OLIVES_NAME = "Green olives";
    public static final String PEPPERONI_NAME = "Pepperoni";
    public static final String ONIONS_NAME = "Onions";
    public static final String BACON_NAME = "Bacon";
    public static final String MUSHROOMS_NAME = "Mushrooms";

    public static final int BLACK_OLIVES_PRICE = 1;
    public static final int GREEN_OLIVES_PRICE = 1;
    public static final int PEPPERONI_PRICE = 3;
    public static final int ONIONS_PRICE = 1;
    public static final int BACON_PRICE = 2;
    public static final int MUSHROOMS_PRICE = 1;

    public static final String BLACK_OLIVES_IMAGE = "/images/black_olives.png";
    public static final String GREEN_OLIVES_IMAGE = "/images/green_olives.png";
    public static final String PEPPERONI_IMAGE = "/images/pepperoni.png";
    public static final String ONIONS_IMAGE = "/images/onions.png";
    public static final String BACON_IMAGE = "/images/bacon.png";
    public static final String MUSHROOMS_IMAGE = "/images/mushrooms.png";
}