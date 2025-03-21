package com.ex4backendspring.controller;

import com.ex4backendspring.model.Topping;
import com.ex4backendspring.util.AppConstants;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * ToppingController class
 * This class is a RestController class that handles the requests for the toppings
 */
@RestController
@RequestMapping("/api")
public class ToppingController {
    private final List<Topping> toppings = Arrays.asList(
            new Topping(AppConstants.BLACK_OLIVES_NAME, AppConstants.BLACK_OLIVES_PRICE,  AppConstants.BLACK_OLIVES_IMAGE),
            new Topping(AppConstants.GREEN_OLIVES_NAME, AppConstants.GREEN_OLIVES_PRICE, AppConstants.GREEN_OLIVES_IMAGE),
            new Topping(AppConstants.PEPPERONI_NAME, AppConstants.PEPPERONI_PRICE, AppConstants.PEPPERONI_IMAGE),
            new Topping(AppConstants.ONIONS_NAME, AppConstants.ONIONS_PRICE, AppConstants.ONIONS_IMAGE),
            new Topping(AppConstants.BACON_NAME, AppConstants.BACON_PRICE, AppConstants.BACON_IMAGE),
            new Topping(AppConstants.MUSHROOMS_NAME, AppConstants.MUSHROOMS_PRICE, AppConstants.MUSHROOMS_IMAGE)
    );

    /**
     * getIngredients method
     * @return List<Topping> - a list of toppings
     */
    @GetMapping("/toppings")
    public List<Topping> getIngredients() {
        return toppings;
    }
}
