package com.codecool.controller;

import com.codecool.dao.UserRepository;
import com.codecool.dao.model.Product;
import com.codecool.dao.model.User;
import com.codecool.data.Diary;
import com.codecool.data.NutrimentsTotalDaily;
import com.codecool.data.PersonalInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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

    @GetMapping("/api/user/email/{email}")
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

        Diary diary = user.getDiary();

        List<Product> productList = diary.getData().get(day);

        NutrimentsTotalDaily nutrimentsTotalDaily
                = new NutrimentsTotalDaily(productList);

        for(Product product : productList){
            nutrimentsTotalDaily.addCalories(product.getCalories());
            nutrimentsTotalDaily.addCarbs(product.getCarbs());
            nutrimentsTotalDaily.addFats(product.getFats());
            nutrimentsTotalDaily.addSugars(product.getSugars());
            nutrimentsTotalDaily.addProteins(product.getProteins());
            nutrimentsTotalDaily.addFiber(product.getFiber());
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

    @PutMapping("/api/user/addProduct/{id}/{date}")
    public User addProductToDate(@PathVariable String id,@PathVariable String date, @RequestBody Product product){
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        User user = mongoOps.findOne(query, User.class);
        assert user != null;
        user.getDiary().addProductToDate(date, product);

        return userRepository.save(user);
    }


    @PutMapping("/api/user/update/personalInfo/{email}")
    public User updatePersonalInfo(@PathVariable String email, @RequestBody PersonalInformation personalInformation){
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));

        User user = mongoOps.findOne(query, User.class);

        assert user != null;
        user.getDiary().setPersonalInformation(personalInformation);

        return userRepository.save(user);
    }

}
