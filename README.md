# Robot Cleaner

## Project
This is a robot cleaner project that simulates the movement and cleaning process of a robot on a two-dimensional plane.

## Environments
- Node.js 18.x
- Docker

## Run the project
First, install the project dependencies:
```sh
npm install
```
Run the project
```sh
npm run dev
```

## Run the project with Docker
1. Build the Docker image:
```sh
docker-compose build
```
2. Start the Docker container
```sh
docker-compose up
```
3. The project will be running at
```sh
http://localhost:5000
```

## Run tests
```sh
npm run test
```
## Project Structure
- migrations
- src
    - queries
    - routes
    - services
    - tests
    - types
    - utils
    - index.ts
- docker-compose.yml
- Dockerfile

## Main files description

- src/index.ts: Project entry file.
- src/queries/: Queries for database interactions
- src/routes/api.ts: Defines API routes.
- src/services/robot.ts: Handles robot logic and database interactions.
- src/tests: Unit tests, integration tests and mock data
- src/types/: Defines types.
- src/utils/robot.ts: Implementation of the robot class.
- migrations/: Database migration file.
- docker-compose.yml: Docker Compose configuration file.
- Dockerfile: Docker image build file.
