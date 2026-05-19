# TaskFlow

A simple, modern full-stack web application for managing tasks, built with Java Spring Boot and plain HTML/CSS/JavaScript.

## Features
- **Add new tasks**: Create tasks with titles and descriptions.
- **Update tasks**: Edit existing tasks.
- **Delete tasks**: Remove tasks you no longer need.
- **Mark as completed**: Toggle task completion status.
- **Clean UI**: Modern, responsive, and beginner-friendly user interface.

## Technologies Used
- **Backend**: Java 17, Spring Boot, Spring Data JPA
- **Database**: H2 Database (In-Memory)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla, Fetch API)
- **Build Tool**: Maven
- **DevOps**: Docker, GitHub Actions (CI)

## Setup Instructions

### Prerequisites
- Java 17 Development Kit (JDK)
- Maven 3.8+
- Docker (optional, for containerization)

### Running Locally (Without Docker)
1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project root directory.
3. Run the following command to build and start the application:
   ```bash
   mvn spring-boot:run
   ```
4. Open your web browser and go to: `http://localhost:8080`

### Running with Docker

You can containerize the application using the provided Dockerfile.

1. Build the Docker image:
   ```bash
   docker build -t taskflow .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 8080:8080 taskflow
   ```
3. Access the application at `http://localhost:8080`

## GitHub Actions CI Pipeline
This project includes a continuous integration workflow defined in `.github/workflows/ci.yml`.

The pipeline runs automatically on pushes or pull requests to the `main` branch and performs the following:
1. **Checkout**: Retrieves the code from the repository.
2. **Setup Java**: Configures the environment with JDK 17.
3. **Build & Test**: Runs `mvn clean install` to compile the code and run tests.
4. **Docker Build**: Builds the Docker image automatically upon successful tests (only on pushes to `main`).

## API Endpoints
- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/{id}` - Retrieve a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update an existing task
- `DELETE /api/tasks/{id}` - Delete a task
