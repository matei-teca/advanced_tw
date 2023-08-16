package com.codecool.dao.model;

import com.codecool.data.Nutriments;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@AllArgsConstructor
public class Product {
    @Id
    private String id;
    private String name;
    private final String barCode;
    private Nutriments nutriments;
}
