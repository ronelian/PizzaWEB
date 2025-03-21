package com.ex4backendspring.controller;

import com.ex4backendspring.model.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ex4backendspring.util.AppConstants;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * OrderController is a REST controller for requests related to orders.
 */
@RestController
@RequestMapping("/api")
public class OrderController {
    private final Map<String, Order> orders = new HashMap<>();
    private final Random random = new Random();

    /**
     * Generates a random 6-digit number as a string.
     * @return a random 6-digit number as a string.
     */
    private String generateRandomNumberString() {
        int randomNumber = random.nextInt(1000000);
        return String.format("%06d", randomNumber);
    }

    /**
     * Generates a unique order number.
     * @return a unique order number.
     */
    public String generateUniqueOrderNumber() {
        String orderNumber;
        do { orderNumber = generateRandomNumberString(); }
        while (orders.containsKey(orderNumber));
        return orderNumber;
    }

    /**
     * Validates an order.
     * @param order the order to validate.
     * @return an error message if the order is invalid, otherwise null.
     */
    private String validateOrder(Order order) {
        if (order.getFirstName() == null || order.getFirstName().isEmpty())
            return AppConstants.ERROR_FIRST_NAME_REQUIRED;
        if (order.getLastName() == null || order.getLastName().isEmpty())
            return AppConstants.ERROR_LAST_NAME_REQUIRED;
        if (order.getStreet() == null || order.getStreet().isEmpty())
            return AppConstants.ERROR_STREET_REQUIRED;
        if (order.getHouseNumber() == null || order.getHouseNumber().isEmpty())
            return AppConstants.ERROR_HOUSE_NUMBER_REQUIRED;
        if (order.getCity() == null || order.getCity().isEmpty())
            return AppConstants.ERROR_CITY_REQUIRED;
        if (order.getPhoneNumber() == null || !order.getPhoneNumber().matches("\\d{10}"))
            return AppConstants.ERROR_PHONE_NUMBER_INVALID;

        if (order.getPizzas() == null || order.getPizzas().isEmpty())
            return AppConstants.ERROR_AT_LEAST_ONE_PIZZA_REQUIRED;

        for (var pizza : order.getPizzas())
            if (pizza.getToppings() == null || pizza.getToppings().size() < 2)
                return AppConstants.ERROR_PIZZA_TOPPINGS_REQUIRED;

        return null;
    }

    /**
     * Saves an order.
     * @param order the order to save.
     * @return a response entity with the saved order and status OK if the order is valid, otherwise a response entity with an error message and status BAD_REQUEST.
     */
    @PostMapping("/order")
    public ResponseEntity<?> saveOrder(@RequestBody Order order) {
        String validationError = validateOrder(order);
        if (validationError != null)
            return new ResponseEntity<>(validationError, HttpStatus.BAD_REQUEST);

        String code = generateUniqueOrderNumber();
        order.setCode(code);
        orders.put(code, order);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    /**
     * Gets an order by its code.
     * @param code the code of the order to get.
     * @return a response entity with the order and status OK if the order exists, otherwise a response entity with an error message and status NOT_FOUND.
     */
    @GetMapping("/order/{code}")
    public ResponseEntity<?> getOrder(@PathVariable String code) {
        Order order = orders.get(code);
        if (order == null)
            return new ResponseEntity<>(AppConstants.ERROR_ORDER_NOT_FOUND, HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }
}
