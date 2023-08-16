package com.codecool.controller;

import com.codecool.dao.UserRepository;
import com.codecool.dao.model.Product;
import com.codecool.dao.model.User;
import com.codecool.data.Diary;
import com.codecool.data.NutrimentsTotalDaily;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
public class UserController {

    private final UserRepository userRepository;
    private final MongoOperations mongoOps;

    @Autowired
    public UserController(UserRepository userRepository, MongoOperations mongoOps) {
        this.userRepository = userRepository;
        this.mongoOps = mongoOps;
    }

    @GetMapping("/api/user/getAll")
    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/api/user/{id}")
    public User getUserById(@PathVariable String id){
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        return mongoOps.findOne(query, User.class);
    }

    @GetMapping("/api/user/{email}")
    public User getUserByEmail(@PathVariable String email){
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));

        return mongoOps.findOne(query, User.class);
    }

    @GetMapping("/api/user/products/{email}/{day}")
    public NutrimentsTotalDaily getNutrimentsByDay(@PathVariable String email, @PathVariable String day){
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));



        //TODO: De mutat in service si dao business logic-ul si mongoose-ul

        User user = mongoOps.findOne(query, User.class);

        assert user != null;
        Diary diary = user.getDiary();

        Map<Product, Integer> productList = diary.getData().get(day);

        NutrimentsTotalDaily nutrimentsTotalDaily
                = new NutrimentsTotalDaily(productList);

        for(Map.Entry<Product, Integer> product : productList.entrySet()){
            nutrimentsTotalDaily.addKcal(product.getKey().getNutriments().getKcal());
            nutrimentsTotalDaily.addCarbohydrates(product.getKey().getNutriments().getCarbohydrates());
            nutrimentsTotalDaily.addFat(product.getKey().getNutriments().getFat());
            nutrimentsTotalDaily.addSugars(product.getKey().getNutriments().getSugars());
            nutrimentsTotalDaily.addProteins(product.getKey().getNutriments().getProteins());
            nutrimentsTotalDaily.addFiber(product.getKey().getNutriments().getFiber());
        }

        return nutrimentsTotalDaily;
    }

    @PostMapping("/api/user/add")
    public String addUser(@RequestBody User user){

        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(user.getEmail()));

        if(mongoOps.findOne(query, User.class) == null){
            userRepository.save(user);
            return "Account created!";
        }else {
            return "Account already exists.";
        }
    }

    @PutMapping("/api/user/addProduct/{email}/{date}/{grams}")
    public User addProductToDate(
            @PathVariable String email,@PathVariable String date, @PathVariable int grams,
            @RequestBody Product product){
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));

        User user = mongoOps.findOne(query, User.class);
        assert user != null;
        user.getDiary().addProductToDate(date, product, grams);

        return userRepository.save(user);
    }

    @PutMapping("/api/user/update/personalInfo/{email}")
    public User updatePersonalInfo(@PathVariable String email, @RequestBody PersonalInformationResponse data){
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));

        User user = mongoOps.findOne(query, User.class);

        assert user != null;
        user.getDiary().setPersonalInformation(data.getPersonalInformation());
        user.setDailyCaloriesTarget(data.getCalories());

        return userRepository.save(user);
    }

}
