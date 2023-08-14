package com.codecool.data;

public class PersonalInformation {


    private Gender gender;
    private ActivityLevel activityLevel;
    private double height;
    private double weight;
    private int age;
    private FitnessTarget fitnessTarget;

    public PersonalInformation() {
        this.gender = null;
        this.activityLevel = null;
        this.height = 0;
        this.weight = 0;
        this.age = 0;
        this.fitnessTarget = null;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public ActivityLevel getActivityLevel() {
        return activityLevel;
    }

    public void setActivityLevel(ActivityLevel activityLevel) {
        this.activityLevel = activityLevel;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public FitnessTarget getFitnessTarget() {
        return fitnessTarget;
    }

    public void setFitnessTarget(FitnessTarget fitnessTarget) {
        this.fitnessTarget = fitnessTarget;
    }
}
