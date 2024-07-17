

# Social Media DashBoard

# OutPut Image (With Demo Data at Backend)

![Screenshot from 2024-07-17 08-42-54](https://github.com/user-attachments/assets/a2bcad6a-97b2-412a-b259-0569a0626cb8)
![Screenshot from 2024-07-17 08-41-37](https://github.com/user-attachments/assets/345e4551-6d5b-4787-91e0-a39f7ea209a5)


![ksnip_20240717-090337](https://github.com/user-attachments/assets/c1be59f8-1089-4a0f-b37e-563b9283b8c7)
![ksnip_20240717-090312](https://github.com/user-attachments/assets/584d3dd6-354b-4472-a708-cd310e09d661)
![ksnip_20240717-090233](https://github.com/user-attachments/assets/8ad6418a-a884-43db-94a3-0f0cc2ee0d01)


## Prerequisites

- **Frontend:**
  - Node.js (v14.0.0 or later)
  - npm (v6.0.0 or later) or Yarn (v1.22.0 or later)

- **Backend:**
  - JDK (Java Development Kit) 17 or later
  - Maven (v3.6.0 or later)
  - IntelliJ IDEA (optional, for development)

## Getting Started

### Clone the Repository

```bash
git clone gttps://github.com/yash777u/Assignment.git
cd your-repo-name
```

## Frontend Setup (React)

### Navigate to the Frontend Directory

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### Start the Frontend Server

```bash
npm start
```

or

```bash
yarn start
```

This will start the React development server at `http://localhost:3000`.

## Backend Setup (Spring Boot)

### Navigate to the Backend Directory

Open IntelliJ IDEA and navigate to the backend directory of your project.

### Open the Project in IntelliJ IDEA

1. Open IntelliJ IDEA.
2. Click on `Open or Import`.
3. Select the backend directory of your project.
4. Click on `Open as Project`.

### Configure the Application

Make sure to set up the necessary configurations in `application.properties` located in `src/main/resources`.

### application.properties Example

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/yourdbname
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update

# JWT properties
jwt.secret=your-secret-key
jwt.expiration=86400000

# Redis properties
spring.redis.host=localhost
spring.redis.port=6379
```

### Install Dependencies and Build the Project

```bash
./mvnw clean install
```

### Run the Spring Boot Application

You can run the application directly from IntelliJ IDEA:

1. Navigate to the `Application.java` file.
2. Right-click on the file and select `Run 'Application.main()'`.

Or, use the command line:

```bash
./mvnw spring-boot:run
```

This will start the backend server at `http://localhost:8080`.

## Running the Application

1. Ensure both the frontend and backend servers are running.
2. Open a browser and navigate to `http://localhost:3000` to access the frontend.

## Additional Information

- **API Documentation:** The backend API is documented using Swagger UI. You can access it at `http://localhost:8080/swagger-ui.html`.
- **Environment Variables:** You can configure the environment variables for both frontend and backend in `.env` files if necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Any acknowledgments, credits, or attributions.

---

This README provides clear instructions for setting up and running both the frontend and backend of your project, assuming a typical React and Spring Boot setup. Adjust paths, dependencies, and configurations as necessary based on your specific project structure.
