package com.codecool.data;

import com.codecool.dao.model.Product;

import java.util.List;

public class NutrimentsTotalDaily {

    private int calories = 0;
    private int carbs = 0;
    private int proteins = 0;
    private int sugars = 0;
    private int fats = 0;
    private int fiber = 0;
    private final List<Product> productsList;

    public NutrimentsTotalDaily(List<Product> productsList) {
        this.productsList = productsList;
    }

    public int getCalories() {
        return calories;
    }

    public void addCalories(int calories) {
        this.calories += calories;
    }

    public int getCarbs() {
        return carbs;
    }

    public void addCarbs(int carbs) {
        this.carbs += carbs;
    }

    public int getProteins() {
        return proteins;
    }

    public void addProteins(int proteins) {
        this.proteins += proteins;
    }

    public int getSugars() {
        return sugars;
    }

    public void addSugars(int sugars) {
        this.sugars += sugars;
    }

    public int getFats() {
        return fats;
    }

    public void addFats(int fats) {
        this.fats += fats;
    }

    public int getFiber() {
        return fiber;
    }

    public void addFiber(int fiber) {
        this.fiber += fiber;
    }

    public void addProductToList(Product product) {
        productsList.add(product);
    }

    public List<Product> getProductsList(){
        return productsList;
    }
}
