package com.example.tenantservice.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

record TenantStatus(String tenantId, String status, int activeUsers) {}

@RestController
@RequestMapping("/tenant")
public class TenantController {
  @GetMapping("/{tenantId}/status")
  public ResponseEntity<TenantStatus> status(@PathVariable String tenantId) {
    return ResponseEntity.ok(new TenantStatus(tenantId, "Active", 82));
  }

  @GetMapping("/list")
  public ResponseEntity<List<String>> listTenants() {
    return ResponseEntity.ok(List.of("acme-logistics", "blueline-billing", "logicorp"));
  }
}
