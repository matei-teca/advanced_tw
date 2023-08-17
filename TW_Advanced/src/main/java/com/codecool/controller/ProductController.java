package com.codecool.controller;

import com.codecool.dao.ProductRepository;
import com.codecool.dao.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
public class ProductController {

    ProductRepository productRepository;
    MongoOperations mongoOps;

    @Autowired
    public ProductController(ProductRepository productRepository, MongoOperations mongoOps) {
        this.productRepository = productRepository;
        this.mongoOps = mongoOps;
    }

    @GetMapping("/api/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/api/products/{id}")
    public Product getOneProduct(@PathVariable String id){

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        return mongoOps.findOne(query, Product.class);
    }


    @PostMapping("/api/products/add")
    public Product addProduct(@RequestBody Product product){
        return productRepository.save(product);
    }
}
