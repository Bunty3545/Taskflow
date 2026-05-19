# Academic Project Synopsis

---

## **1. Title of the Project**
**TaskFlow: A Smart, Secure, and Automated Full-Stack Task Management System with DevOps Integration**

---

## **2. Academic & Course Details**
*   **Course Code:** INT332 (DevOps)
*   **Evaluation Component:** Project CA2
*   **Academic Session:** Semester 6
*   **Institution:** Lovely Professional University

---

## **3. Abstract / Introduction**
In today's fast-paced digital environment, managing tasks efficiently is crucial for individual and team productivity. **TaskFlow** is a lightweight, responsive, and robust full-stack task management application designed to organize daily operations. 

Beyond core functionalities, this project is engineered using **DevOps methodologies** to demonstrate industry-standard automated delivery pipelines. The application separates concerns using a Spring Boot RESTful backend, an H2 in-memory database, and a highly responsive glassmorphism dark-themed frontend. The entire build, test, and release cycle is managed through Docker containerization and a GitHub Actions Continuous Integration (CI) pipeline.

---

## **4. Objectives of the Project**
- **Efficient CRUD Operations:** To provide seamless creation, reading, updating, and deletion of user tasks.
- **Responsive and Aesthetic Design:** To build a modern dark-mode user interface using HTML5, CSS3 (glassmorphism/flexbox), and Vanilla JavaScript for smooth interactions.
- **RESTful Architecture:** To design clean APIs for frontend-backend communication.
- **Containerization:** To package the Java application into a lightweight, portable Docker container running on port 8080.
- **Automated CI/CD Pipeline:** To configure GitHub Actions for automated building, automated testing, and Docker image generation on code commits.

---

## **5. Literature Review & Gap Analysis**
### **Existing Systems:**
Traditional task management systems are either overly complex (enterprise-grade Jira/Asana) or lack robust continuous integration and automated deployment setups. Deploying these systems often requires manual server setup, manual testing, and complex configurations, leading to inconsistent environments ("works on my machine" syndrome).

### **Proposed System (TaskFlow):**
TaskFlow bridges this gap by providing an intuitive, beginner-friendly task manager that showcases best-practice **DevOps patterns**:
- **Portability:** Eliminates environment conflicts via Docker.
- **Automation:** Replaces manual builds/tests with an automated GitHub Actions pipeline.
- **Modern UI:** Features a custom dark-mode Hero page and task board.

---

## **6. Technology Stack**

### **A. Backend**
- **Framework:** Spring Boot (Java 17)
- **Database:** H2 Database (In-Memory SQL)
- **Build Tool:** Apache Maven
- **Object Relational Mapping (ORM):** Spring Data JPA

### **B. Frontend**
- **Structure & Layout:** HTML5 (Semantic elements)
- **Styling:** CSS3 (Vanilla, Glassmorphism, Responsive Grid, Glowing Animations)
- **Scripting:** Vanilla JavaScript (ES6+, Fetch API)

### **C. DevOps & Deployment**
- **Containerization:** Docker (Multi-stage build)
- **CI Tool:** GitHub Actions (`.github/workflows/ci.yml`)
- **Version Control:** Git & GitHub

---

## **7. System Architecture**

```mermaid
graph TD
    User([User Browser]) -->|HTTP / Fetch API| FE[Frontend: HTML/CSS/JS]
    FE -->|JSON REST Requests| BE[Spring Boot REST Controller]
    BE -->|Service Logic| SRV[TaskService]
    SRV -->|JPA Repositories| DB[(H2 Database)]
    
    subgraph CI/CD Pipeline (GitHub Actions)
        Push[Git Push to main] --> Checkout[Checkout Repo]
        Checkout --> JDK[Setup JDK 17]
        JDK --> Build[Maven Build & Test]
        Build --> DockerBuild[Build Docker Image]
    end
```

---

## **8. Hardware & Software Requirements**

### **A. Software Requirements**
- **Operating System:** Windows 10/11, macOS, or Linux
- **Language/SDK:** JDK 17 (Eclipse Temurin)
- **Database Engine:** H2 Database Engine
- **DevOps Tools:** Docker Engine & Docker Desktop
- **IDE:** Visual Studio Code / IntelliJ IDEA

### **B. Hardware Requirements**
- **Processor:** Dual-Core Intel i5 / AMD Ryzen 5 or higher
- **RAM:** Minimum 8 GB (16 GB Recommended for Docker execution)
- **Storage:** 10 GB available SSD space

---

## **9. Implementation Modules**

1.  **Task Creation Module:** Users fill out a form with a task title and description. Validations ensure no empty fields.
2.  **Task Retrieval & Dashboard:** Loads and displays tasks dynamically using a `fetch()` GET request, organizing completed and active tasks with a modern UI count.
3.  **Task Status Module:** Quick-actions to mark a task as completed/incomplete, which visually updates the list.
4.  **Task Modification & Deletion Module:** Full editing capabilities with prepopulated forms, and prompt confirmations prior to deleting a task.
5.  **Docker Containerization:** Configured a `Dockerfile` that packages the application using an OpenJDK alpine base image for maximum security and minimal footprint.
6.  **CI Pipeline Integration:** Automates testing and verification on every code integration.

---

## **10. Expected Outcome & Future Scope**
- **Immediate Outcome:** A fully functioning task manager running smoothly on `http://localhost:8080` inside a Docker container, backed by a successful GitHub Actions CI green badge.
- **Future Scope:**
    - Adding multi-user authentication (Spring Security & JWT).
    - Deploying to a cloud provider (AWS/Azure) using a Continuous Deployment (CD) pipeline.
    - Persistent database storage using MySQL or PostgreSQL.
