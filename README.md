# Robot Cleaner 🤖

## Overview
The **Robot Cleaner** project simulates the movement and cleaning process of a robotic cleaner on a two-dimensional plane. This project showcases the robot's ability to navigate a virtual environment and keep it clean by integrating modular design and scalable technologies.

---

## Requirements
- **Node.js**: Version 18.x
- **Docker**: Installed for containerized execution
- **local Postgres or Postgres Docker Container**

---

## Getting Started

### 1. Run Locally
Install the project dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

### 2. Run with Docker
1. Build the Docker image:
   ```bash
   docker compose build
   ```
2. Start the Docker container:
   ```bash
   docker compose up
   ```
3. The project will be accessible at:
   ```plaintext
   http://localhost:5000
   ```

---

## Running Integration and Unit Tests
To execute all test suites:
```bash
npm run test
```
To execute integration test suites only:
```bash
npm run test:integration
```
To execute unit test suites only:
```bash
npm run test:unit
```
---

## Project Structure
```
.
├── migrations/
├── src/
│   ├── queries/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── types/
│   ├── utils/
│   └── index.ts
├── docker-compose.yml
├── Dockerfile
```

### Key Directories and Files
- **`src/index.ts`**: Entry point of the application.
- **`src/queries/`**: Contains database query logic.
- **`src/routes/api.ts`**: Defines API endpoints.
- **`src/services/robot.ts`**: Manages robot logic and database interactions.
- **`src/tests/`**: Includes unit, integration tests, and mock data.
- **`src/types/`**: Defines TypeScript interfaces and types.
- **`src/utils/robot.ts`**: Implements the robot class logic.
- **`migrations/`**: Holds database migration scripts.
- **`docker-compose.yml`**: Configuration for Docker Compose.
- **`Dockerfile`**: Defines instructions for building the Docker image.

---

## Features
- **Simulation Engine**: Implements robot navigation and cleaning algorithms.
- **Modular Design**: Encapsulated services and utilities for clean and maintainable code.
- **Database Ready**: Includes database interaction logic with queries and migrations.
- **Testing**: Comprehensive tests to ensure stability and correctness.
- **Containerization**: Dockerized setup for easy deployment and consistent environments.

## Optimization(TODO)
- High load and high concurrency performance
- Security
