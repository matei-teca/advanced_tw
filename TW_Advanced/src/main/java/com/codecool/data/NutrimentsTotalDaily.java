package com.codecool.data;

import com.codecool.dao.model.Product;

import java.util.List;

public class NutrimentsTotalDaily {

    private int kcal = 0;
    private int carbohydrates = 0;
    private int fat = 0;
    private int proteins = 0;
    private int fiber = 0;
    private int sugars = 0;
    private final List<Product> productsList;

    public NutrimentsTotalDaily(List<Product> productsList) {
        this.productsList = productsList;
    }

    public void addKcal(int kcal) {
        this.kcal += kcal;
    }

    public void addCarbohydrates(int carbohydrates) {
        this.carbohydrates += carbohydrates;
    }

    public void addFat(int fat) {
        this.fat += fat;
    }

    public void addProteins(int proteins) {
        this.proteins += proteins;
    }

    public void addFiber(int fiber) {
        this.fiber += fiber;
    }

    public void addSugars(int sugars) {
        this.sugars += sugars;
    }

    //    public void addCalories(int calories) {
//        this.calories += calories;
//    }
//
//
//    public void addCarbs(int carbs) {
//        this.carbs += carbs;
//    }
//
//
//    public void addProteins(int proteins) {
//        this.proteins += proteins;
//    }
//
//
//    public void addSugars(int sugars) {
//        this.sugars += sugars;
//    }
//
//
//    public void addFats(int fats) {
//        this.fats += fats;
//    }
//
//
//    public void addFiber(int fiber) {
//        this.fiber += fiber;
//    }

}
