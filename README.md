# Microservice

## What is a Microservice?

A microservice is a small, independent, and self-contained software component that performs a specific business function within a larger application or system.

## Social Media Application

The Social Media application utilizes a microservices architecture for improved scalability, maintainability, and flexibility. Two main microservices are employed:

### Auth Microservice
- **Database:** MongoDB-based
- Handles user authentication, login, and registration.
- Communicates with the PostgreSQL-based Posts Microservice for seamless integration.

### Posts Microservice
- **Database:** PostgreSQL-based
- Manages post storage, retrieval, and related operations.
- Communicates with the MongoDB-based Auth Microservice for user authentication.

### Communication
```
   +------------------------+                 Axios                          +------------------------+
   |    Auth Microservice   |    ------------------------------------- >     |   Posts Microservice   |
   |   (MongoDB-based)      |    <-------------------------------------      |   (PostgreSQL-based)   |
   +------------------------+                                                +------------------------+
             |                                                                           | 
             v                                                                           v
   +------------------------+                                                +------------------------+ 
   |   MongoDB Database     |                                                 |  PostgreSQL Database |
   |                        |                                                 |                      |
   +------------------------+                                                +------------------------+ 
```
### *This microservices architecture allows for the independent development, deployment, and scaling of each component.*

### *Feel free to customize it further based on your specific application details.*
