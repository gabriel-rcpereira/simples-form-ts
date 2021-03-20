package com.grcp.dojo.entrypoint.rest;

import com.grcp.dojo.domain.User;
import com.grcp.dojo.entrypoint.rest.model.UserRequest;
import com.grcp.dojo.gateway.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/api/v1/users")
    @CrossOrigin(value = "*")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = this.userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/api/v1/users/{id}")
    @CrossOrigin(value = "*")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
        return this.userRepository.findById(id)
                .map(user -> ResponseEntity.ok(user))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/api/v1/users")
    @CrossOrigin(value = "*")
    public ResponseEntity<Void> postCreateUser(@RequestBody UserRequest userRequest) {
        this.userRepository.save(User.builder().username(userRequest.getUsername()).name(userRequest.getName()).build());
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/api/v1/users/{id}")
    @CrossOrigin(value = "*")
    public ResponseEntity<Void> putUpdateUser(@PathVariable("id") String id, @RequestBody UserRequest userRequest) {
        this.userRepository.findById(id)
                .map(user -> user.toBuilder().name(userRequest.getName()).build())
                .map(updatedUser -> this.userRepository.save(updatedUser))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/api/v1/users/{id}")
    @CrossOrigin(value = "*")
    public ResponseEntity<Void> deleteUpdateUser(@PathVariable("id") String id) {
        this.userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
