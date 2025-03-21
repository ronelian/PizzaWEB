package com.ex4backendspring.model;

import java.util.List;

/**
 * Pizza model class
 */
public class Pizza {
    private List<Topping> toppings;
    private double totalPrice;

    /**
     * Get the list of toppings
     * @return List of toppings
     */
    public List<Topping> getToppings() {
        return toppings;
    }

    /**
     * Set the list of toppings
     * @param toppings List of toppings
     */
    public void setToppings(List<Topping> toppings) {
        this.toppings = toppings;
    }

    /**
     * Get the total price of the pizza
     * @return Total price of the pizza
     */
    public double getTotalPrice() {
        return totalPrice;
    }

    /**
     * Set the total price of the pizza
     * @param totalPrice Total price of the pizza
     */
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
