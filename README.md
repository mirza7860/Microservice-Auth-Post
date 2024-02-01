# Microservice

## What is microservice ?
  - A microservice is a small, independent, and self-contained software component that performs a specific business function within a larger application or system

## SocialMedia application
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
