package com.codecool.data;

import com.codecool.dao.model.Product;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

public class Diary {

    private Map<String, Map<Product, Integer>> data;
    private PersonalInformation personalInformation;

    public Diary() {
        this.data = new HashMap<>();
        this.personalInformation = new PersonalInformation();
    }

    public void setData(Map<String, Map<Product, Integer>> data) {
        this.data = data;
    }

    public void setPersonalInformation(PersonalInformation personalInformation) {
        this.personalInformation = personalInformation;
    }

    public Map<String, Map<Product, Integer>> getData(){
        return data;
    }

    public PersonalInformation getPersonalInformation(){
        return personalInformation;
    }

    public void addProductToDate(String date, Product product, int grams){
        if(data.get(date) == null) data.put(date, Map.of(product, grams));
        else data.get(date).put(product, grams);

    }

    //    public void addDate(Product product){
//
//        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
//
//        data.put(simpleDateFormat.format(LocalDate.now()), new ArrayList<>(List.of(product)));
//    }

//    public List<Product> getProductsForDay(String date){
//
//        return data.get(date);
//    }

}
