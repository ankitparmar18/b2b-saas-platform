# B2B SaaS Platform Monorepo

A starter monorepo for a cloud-native multi-tenant B2B SaaS platform.

## Structure

- `frontend/` - Vite + React + TypeScript dashboard using MUI
- `backend/api-gateway/` - Spring Boot API gateway stub
- `backend/auth-service/` - Spring Boot auth microservice stub
- `backend/tenant-service/` - Spring Boot tenant service stub
- `backend/shared/` - shared Java DTOs and utilities
- `k8s/` - Kubernetes manifest stubs
- `terraform/` - infrastructure stubs for AWS EKS and DocumentDB
- `.github/workflows/` - CI pipeline

## Getting started

### Frontend

```bash
cd b2b-saas-platform
pnpm install
pnpm dev
```

### Backend

Each backend service is a Spring Boot Maven project.

```bash
cd backend/auth-service
./mvnw spring-boot:run
```

## Notes

This initial scaffold focuses on UI and basic backend design. API integration, database connectivity, DevOps and cloud deployment will be added next.
