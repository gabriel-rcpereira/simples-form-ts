package com.grcp.dojo.entrypoint.rest.model;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class UserRequest {

    private final String username;
    private final String name;
}
