package com.grcp.dojo.domain;

import lombok.Builder;
import lombok.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder(toBuilder = true)
@Value
@Document
public class User {

    @Id
    private final String id;
    private final String username;
    private final String name;
}
