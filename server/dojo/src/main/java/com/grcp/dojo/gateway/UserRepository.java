package com.grcp.dojo.gateway;

import com.grcp.dojo.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, String> {

    List<User> findAll();

    Optional<User> findByUsername(String username);
}
