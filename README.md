# Polyglot gRPC Microservices E-Commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Go](https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white)](https://golang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Temporal](https://img.shields.io/badge/Temporal-000000?logo=temporal&logoColor=white)](https://temporal.io/)
[![gRPC](https://img.shields.io/badge/gRPC-4285F4?logo=google&logoColor=white)](https://grpc.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

A **polyglot microservices** e-commerce platform showcasing modern distributed system architecture with **TypeScript/NestJS**, **Golang**, **Temporal workflows**, and **gRPC** communication.

## 🏗️ Architecture Overview

This project demonstrates a **polyglot microservices architecture** where different services are built using the most appropriate technology stack for their specific requirements. The system combines the rapid development capabilities of **TypeScript/NestJS** with the performance and concurrency advantages of **Golang**, orchestrated through **Temporal workflows**.

### 🔧 Service Architecture

#### **TypeScript/NestJS Services** (Authentication & Core Business Logic)
- **API Gateway**: Central HTTP/REST entry point with request routing
- **Authentication Service**: JWT-based authentication and authorization
- **User Service**: User management and profile operations  
- **Product Service**: Product catalog and inventory management

#### **Golang Services** (High-Performance & Workflows)
- **Order Service**: Order lifecycle management with MongoDB
- **Payment Service**: Payment processing with ZaloPay integration
- **Order Orchestrator**: Temporal workflow orchestration engine

#### **Workflow Engine**
- **Temporal**: Distributed workflow orchestration for complex business processes

### 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **API Gateway** | TypeScript + NestJS + Express | HTTP/REST API layer |
| **Auth/User/Product Services** | TypeScript + NestJS + gRPC | Core business services |
| **Order/Payment Services** | Golang + gRPC + MongoDB | High-performance transaction processing |
| **Workflow Orchestration** | Golang + Temporal | Distributed workflow management |
| **Communication** | gRPC + Protocol Buffers | Inter-service communication |
| **Databases** | PostgreSQL + MongoDB | Polyglot persistence |
| **Containerization** | Docker + Docker Compose | Development & deployment |
| **Logging** | Winston (TS) + Zap (Go) | Structured logging |

## 📋 Features

### 🚀 **Core Business Features**
- ✅ **Multi-language Architecture**: TypeScript/NestJS + Golang services
- ✅ **Temporal Workflows**: Complex order processing with distributed transactions
- ✅ **Payment Integration**: ZaloPay payment gateway integration
- ✅ **JWT Authentication**: Secure token-based authentication
- ✅ **Order Management**: Complete order lifecycle with workflow orchestration
- ✅ **Product Catalog**: Product management with inventory tracking
- ✅ **User Management**: User profiles and authentication
- ✅ **Real-time Processing**: Async payment processing with callbacks

### 🏗️ **Architecture Patterns**
- ✅ **Polyglot Microservices**: Language-optimized service design
- ✅ **Saga Pattern**: Distributed transaction management with Temporal
- ✅ **API Gateway Pattern**: Centralized request routing and authentication
- ✅ **Database per Service**: Service-specific data storage strategies
- ✅ **Event-Driven Architecture**: Temporal workflow events and activities
- ✅ **Circuit Breaker**: Fault tolerance and resilience
- ✅ **CQRS**: Command Query Responsibility Segregation

### 🔧 **Technical Features**
- ✅ **gRPC Communication**: High-performance inter-service communication
- ✅ **Protocol Buffers**: Type-safe, language-agnostic service contracts
- ✅ **Temporal Workflows**: Reliable, scalable workflow orchestration
- ✅ **MongoDB Integration**: Document-based storage for orders and payments
- ✅ **PostgreSQL Integration**: Relational data for users and products
- ✅ **Docker Compose**: Multi-language development environment
- ✅ **Structured Logging**: Comprehensive logging across all services

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - for TypeScript services
- **Go** (v1.23 or higher) - for Golang services
- **Docker** and **Docker Compose** - for development environment
- **Protocol Buffers Compiler** (protoc) - for gRPC code generation
- **Temporal CLI** (optional) - for workflow monitoring

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vogiaan1904/nestjs-microservice.git
   cd nestjs-microservice
   ```

2. **Install Protocol Buffers**
   ```bash
   # macOS
   brew install protobuf
   
   # Ubuntu/Debian
   sudo apt-get install protobuf-compiler
   
   # Install TypeScript plugin
   npm install -g protoc-gen-ts_proto
   ```

3. **Start the complete development environment**
   ```bash
   # Start all services including Temporal server
   docker-compose -f docker-compose.dev.yml up -d
   ```

4. **Generate Protocol Buffer files**
   ```bash
   # Generate TypeScript files
   cd api-gateway && npm run proto:all
   
   # Generate Go files (if needed)
   cd order-svc && make proto-gen
   cd payment-svc && make proto-gen
   cd order-orchestrator && make proto-gen
   ```

### 🔥 Development Mode

#### TypeScript Services

#### Golang Services

## 📁 Project Structure

## 🔧 Configuration

### Environment Variables

#### TypeScript Services

#### Golang Services

### Temporal Configuration

## 🌊 Workflow Orchestration with Temporal

### Order Processing Workflow

1. **Pre-Payment Workflow** (`ProcessPrePaymentOrder`)
   - Validate order details
   - Reserve product inventory
   - Create payment URL
   - Set payment timeout

2. **Post-Payment Workflow** (`ProcessPostPaymentOrder`)
   - Confirm payment status
   - Update order status
   - Update product stock
   - Trigger delivery process

### Workflow Activities

```go
// Order Activities
func (a *OrderActivities) GetOrder(ctx context.Context, orderCode string) (*OrderData, error)
func (a *OrderActivities) UpdateOrderStatus(ctx context.Context, orderID string, status OrderStatus) error

// Payment Activities  
func (a *PaymentActivities) ProcessPayment(ctx context.Context, params PaymentParams) (*PaymentResponse, error)

// Product Activities
func (a *ProductActivities) ReserveInventory(ctx context.Context, items []*OrderItem) error
func (a *ProductActivities) ReleaseInventory(ctx context.Context, items []*OrderItem) error
```

## 🧪 Testing

### TypeScript Services

### Golang Services

## 🚀 Deployment

### Docker Production Build
```bash
# Build all services
docker-compose -f docker-compose.prod.yml build

# Deploy complete stack
docker-compose -f docker-compose.prod.yml up -d
```

### Individual Service Deployment

## 📊 Service Communication

### Service Endpoints

| Service | Protocol | Port | Language | Database |
|---------|----------|------|----------|----------|
| API Gateway | HTTP/REST | 3000 | TypeScript | - |
| Auth Service | gRPC | 50051 | TypeScript | PostgreSQL |
| User Service | gRPC | 50052 | TypeScript | PostgreSQL |
| Product Service | gRPC | 50053 | TypeScript | PostgreSQL |
| Order Service | gRPC | 50054 | **Go** | **MongoDB** |
| Payment Service | gRPC + HTTP | 50055 | **Go** | **MongoDB** |
| Order Orchestrator | **Temporal** | - | **Go** | **Temporal** |

### REST API Endpoints

```bash
# Authentication
POST /auth/register          # User registration
POST /auth/login            # User login  
POST /auth/refresh          # Refresh token

# Orders (orchestrated through Temporal)
POST /orders                # Create order → triggers Temporal workflow
GET  /orders/:id           # Get order status
PUT  /orders/:id/status    # Update order status

# Payments (webhook callbacks)
POST /payments/zalopay/callback  # ZaloPay payment webhook
```

### Temporal Workflows

```bash
# Pre-payment workflow
TASK_QUEUE: PRE_PAYMENT_ORDER_TASK_QUEUE
WORKFLOW: ProcessPrePaymentOrder

# Post-payment workflow  
TASK_QUEUE: POST_PAYMENT_ORDER_TASK_QUEUE
WORKFLOW: ProcessPostPaymentOrder
```

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication (TypeScript)
- **Input Validation**: gRPC message validation across all services
- **Database Security**: Connection pooling and secure credentials
- **Payment Security**: Encrypted payment gateway integration
- **CORS Configuration**: Cross-origin resource sharing
- **Rate Limiting**: API rate limiting protection

## 📈 Monitoring & Observability

### Logging
- **TypeScript Services**: Winston structured logging
- **Golang Services**: Uber Zap high-performance logging
- **Temporal**: Built-in workflow execution tracking

### Monitoring
- **Service Health**: Health check endpoints
- **Temporal UI**: Workflow execution monitoring
- **Database Monitoring**: MongoDB and PostgreSQL metrics
- **gRPC Metrics**: Inter-service communication metrics

## 🔄 Workflow Examples

### Order Processing Flow

1. **Client** creates order via API Gateway
2. **Order Service** (Go) validates and stores order
3. **Temporal Workflow** begins pre-payment process
4. **Product Service** (TS) reserves inventory
5. **Payment Service** (Go) creates payment URL
6. **Customer** completes payment via ZaloPay
7. **Payment Webhook** triggers post-payment workflow
8. **Order Service** updates status to completed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [Golang](https://golang.org/) - High-performance systems language
- [Temporal](https://temporal.io/) - Reliable workflow orchestration
- [gRPC](https://grpc.io/) - High-performance RPC framework  
- [Protocol Buffers](https://protobuf.dev/) - Language-neutral serialization
- [MongoDB](https://www.mongodb.com/) - Document database
- [PostgreSQL](https://www.postgresql.org/) - Relational database
- [Docker](https://www.docker.com/) - Containerization platform

**Built by [Vo Gia An](https://github.com/vogiaan1904)**

*Demonstrating modern polyglot microservices with TypeScript, Golang, and Temporal*
