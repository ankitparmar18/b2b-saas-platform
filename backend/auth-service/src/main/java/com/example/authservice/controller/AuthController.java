package com.example.authservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

record LoginRequest(String username, String password, String tenantId) {}
record LoginResponse(String token, String tenant) {}

@RestController
@RequestMapping("/auth")
public class AuthController {
  @PostMapping("/login")
  public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
    var token = "mock-token-for-" + request.username();
    return ResponseEntity.ok(new LoginResponse(token, request.tenantId()));
  }
}
