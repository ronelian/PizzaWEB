package com.ex4backendspring.model;

/**
 * Represents a topping that can be added to a pizza.
 * @param name
 * @param price
 * @param imageUrl
 */
public record Topping(String name, double price, String imageUrl) {}
