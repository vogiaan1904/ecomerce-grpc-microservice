# gRPC Microservices E-Commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![gRPC](https://img.shields.io/badge/gRPC-4285F4?logo=google&logoColor=white)](https://grpc.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

A scalable e-commerce microservices architecture built with **NestJS** and **gRPC**, featuring robust authentication, order management, payment processing, and more.

## 🏗️ Architecture Overview

This project implements a **microservices architecture** using gRPC for inter-service communication and RESTful APIs for client-facing endpoints. The system is composed of specialized services that work together to provide a complete e-commerce solution.

### 🔧 Core Components

- **API Gateway**: Central entry point routing requests to appropriate microservices
- **Authentication Service**: JWT-based authentication and authorization
- **User Service**: User management and profile operations
- **Product Service**: Product catalog and inventory management
- **Order Service**: Order lifecycle management
- **Payment Service**: Secure payment processing
- **Order Orchestrator**: Business logic coordination between services

### 🛠️ Technology Stack

- **Framework**: NestJS (Node.js)
- **Language**: TypeScript
- **Communication**: gRPC with Protocol Buffers
- **API Layer**: REST API via Express
- **Containerization**: Docker & Docker Compose
- **Logging**: Winston with structured logging
- **Development**: Hot reload, ESLint, Prettier

## 📋 Features

### 🚀 **Core Features**
- ✅ Microservices architecture with gRPC communication
- ✅ API Gateway with request routing and load balancing
- ✅ JWT-based authentication and authorization
- ✅ User management and profile system
- ✅ Product catalog with inventory tracking
- ✅ Order management with status tracking
- ✅ Secure payment processing
- ✅ Email notifications and verification
- ✅ Password reset functionality

### 🏗️ **Architecture Patterns**
- ✅ **Microservice Architecture**: Independent, deployable services
- ✅ **API Gateway Pattern**: Centralized request routing
- ✅ **Service Discovery**: gRPC-based service communication
- ✅ **Database per Service**: Isolated data storage
- ✅ **Saga Pattern**: Distributed transaction management
- ✅ **Circuit Breaker**: Fault tolerance and resilience

### 🔧 **Developer Experience**
- ✅ Hot reload for rapid development
- ✅ Structured logging with correlation IDs
- ✅ Comprehensive error handling
- ✅ Protocol Buffer code generation
- ✅ Docker-based development environment
- ✅ Environment-based configuration

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **Protocol Buffers Compiler** (protoc)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nestjs-microservice.git
   cd nestjs-microservice
   ```

2. **Install Protocol Buffers dependencies**
   ```bash
   # Install protoc-gen-ts_proto for TypeScript generation
   npm install -g protoc-gen-ts_proto
   ```

3. **Start the development environment**
   ```bash
   # Start all services with Docker Compose
   docker-compose -f docker-compose.dev.yml up -d
   ```

4. **Generate Protocol Buffer files**
   ```bash
   # Generate TypeScript files from .proto definitions
   npm run proto:all
   ```

### 🔥 Development Mode

Each service can be run independently for development:

```bash
# API Gateway (Port 3000)
cd api-gateway && npm run start:dev

# Authentication Service
cd auth-svc && npm run start:dev

# User Service  
cd user-svc && npm run start:dev

# Product Service
cd product-svc && npm run start:dev

# Order Service
cd order-svc && npm run start:dev

# Payment Service
cd payment-svc && npm run start:dev

# Order Orchestrator
cd order-orchestrator && npm run start:dev
```

## 📁 Project Structure

```
nestjs-microservice/
├── 📁 api-gateway/          # API Gateway service
├── 📁 auth-svc/            # Authentication service
├── 📁 user-svc/            # User management service
├── 📁 product-svc/         # Product catalog service
├── 📁 order-svc/           # Order management service
├── 📁 payment-svc/         # Payment processing service
├── 📁 order-orchestrator/  # Business logic orchestrator
├── 📁 protos/              # Protocol Buffer definitions
│   └── 📁 proto/           # gRPC service definitions
│       ├── auth.proto      # Authentication service contract
│       ├── user.proto      # User service contract
│       ├── product.proto   # Product service contract
│       ├── order.proto     # Order service contract
│       └── payment.proto   # Payment service contract
├── 📄 docker-compose.dev.yml  # Development environment
├── 📄 .gitmodules          # Git submodules configuration
└── 📄 LICENSE              # MIT License
```

## 🔧 Configuration

### Environment Variables

Each service uses environment-specific configuration:

```bash
# API Gateway
PORT=3000
NODE_ENV=development

# Authentication Service
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_EXPIRES_IN=30d

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

### Protocol Buffers

gRPC service definitions are located in `/protos/proto/`:

- `auth.proto` - Authentication and authorization
- `user.proto` - User management operations
- `product.proto` - Product catalog operations
- `order.proto` - Order management operations
- `payment.proto` - Payment processing operations

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:e2e

# Run tests with coverage
npm run test:cov
```

## 🚀 Deployment

### Docker Production Build

```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Deploy to production
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes Deployment

```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -l app=nestjs-microservice
```

## 📊 Service Communication

### gRPC Services

| Service | Port | Description |
|---------|------|-------------|
| API Gateway | 3000 | HTTP/REST API entry point |
| Auth Service | 50051 | Authentication & authorization |
| User Service | 50052 | User management |
| Product Service | 50053 | Product catalog |
| Order Service | 50054 | Order management |
| Payment Service | 50055 | Payment processing |
| Order Orchestrator | 50056 | Business logic coordination |

### API Endpoints

#### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh JWT token
- `POST /auth/forgot-password` - Password reset request
- `POST /auth/reset-password` - Password reset confirmation

#### Users
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile
- `GET /users/:id` - Get user by ID

#### Products
- `GET /products` - List products
- `GET /products/:id` - Get product details
- `POST /products` - Create product (admin)
- `PUT /products/:id` - Update product (admin)

#### Orders
- `GET /orders` - List user orders
- `GET /orders/:id` - Get order details
- `POST /orders` - Create new order
- `PUT /orders/:id/status` - Update order status

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access Control**: Admin and user roles
- **Input Validation**: Comprehensive request validation
- **Rate Limiting**: API rate limiting protection
- **CORS Configuration**: Cross-origin resource sharing
- **Helmet Integration**: Security headers middleware

## 📈 Monitoring & Logging

- **Structured Logging**: JSON-formatted logs with correlation IDs
- **Request Tracing**: Distributed tracing across services
- **Health Checks**: Service health monitoring endpoints
- **Metrics Collection**: Performance and usage metrics
- **Error Tracking**: Comprehensive error monitoring

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write comprehensive tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting PR
- Use conventional commit messages

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [gRPC](https://grpc.io/) - High-performance RPC framework
- [Protocol Buffers](https://protobuf.dev/) - Language-neutral serialization
- [Docker](https://www.docker.com/) - Containerization platform

## 📞 Support

If you have any questions or need help with setup, please:

- 📧 Open an issue on GitHub
- 📚 Check the documentation
- 💬 Join our community discussions

---

**Made with ❤️ by [Vo Gia An](https://github.com/vogiaan1904)**

*Building scalable microservices with modern technologies*
