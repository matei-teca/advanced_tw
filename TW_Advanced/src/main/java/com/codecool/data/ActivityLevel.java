package com.codecool.data;

public enum ActivityLevel {
    SEDENTARY("Little or no exercise"),
    LIGHTLY_ACTIVE("Light exercise 1-3 days per week"),
    MODERATELY_ACTIVE("Light exercise 1-3 days per week"),
    VERY_ACTIVE("Hard exercise 6-7 days per week"),
    EXTRA_ACTIVE("Very hard exercise, physical job or training twice a day");

    private final String description;

    ActivityLevel(String description) {
        this.description = description;
    }

    public String getDescription(){
        return description;
    }
}
