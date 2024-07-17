To create a brief documentation for POSTMAN showcasing the functionality of your backend APIs, follow these steps:

### 1. Collection Name: Social Media Analytics Dashboard Backend

### 2. Environment Setup:
   - **Base URL:** `http://localhost:8080` (assuming your backend runs locally on port 8080)

### 3. Endpoints:

#### Users Endpoint
- **GET /api/users/{id}**
  - Description: Fetch user details by ID.
  - Request: 
    - URL: `{{BaseURL}}/api/users/1`
    - Method: GET
  - Response:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "category": "Influencer",
      "bio": "Tech enthusiast and content creator",
      "contactOptions": "Contact me at john.doe@example.com",
      "links": "https://www.example.com/johndoe",
      "followers": 10000,
      "following": 500,
      "totalPosts": 200
    }
    ```

- **POST /api/users**
  - Description: Create a new user.
  - Request: 
    - URL: `{{BaseURL}}/api/users`
    - Method: POST
    - Body:
      ```json
      {
        "name": "Jane Smith",
        "category": "Fashion Blogger",
        "bio": "Fashion lover sharing style tips",
        "contactOptions": "Contact me at jane.smith@example.com",
        "links": "https://www.example.com/janesmith",
        "followers": 5000,
        "following": 300,
        "totalPosts": 100
      }
      ```
  - Response:
    ```json
    {
      "id": 2,
      "name": "Jane Smith",
      "category": "Fashion Blogger",
      "bio": "Fashion lover sharing style tips",
      "contactOptions": "Contact me at jane.smith@example.com",
      "links": "https://www.example.com/janesmith",
      "followers": 5000,
      "following": 300,
      "totalPosts": 100
    }
    ```

#### Posts Endpoint
- **GET /api/posts/user/{userId}**
  - Description: Fetch posts by user ID.
  - Request:
    - URL: `{{BaseURL}}/api/posts/user/1`
    - Method: GET
  - Response:
    ```json
    [
      {
        "id": 1,
        "content": "Excited to share my latest tech review!",
        "totalShares": 50,
        "totalComments": 100,
        "totalSaves": 20
      }
    ]
    ```

- **POST /api/posts**
  - Description: Create a new post.
  - Request:
    - URL: `{{BaseURL}}/api/posts`
    - Method: POST
    - Body:
      ```json
      {
        "content": "Check out my new recipe video!",
        "totalShares": 10,
        "totalComments": 30,
        "totalSaves": 5
      }
      ```
  - Response:
    ```json
    {
      "id": 2,
      "content": "Check out my new recipe video!",
      "totalShares": 10,
      "totalComments": 30,
      "totalSaves": 5
    }
    ```

#### Analytics Endpoint
- **GET /api/analytics/user/{userId}**
  - Description: Fetch analytics by user ID.
  - Request:
    - URL: `{{BaseURL}}/api/analytics/user/1`
    - Method: GET
  - Response:
    ```json
    {
      "id": 1,
      "accountReached": 50000,
      "accountEngaged": 1000,
      "adsRun": 5,
      "activePromotions": 2,
      "totalStories": 30
    }
    ```

- **POST /api/analytics**
  - Description: Create new analytics data.
  - Request:
    - URL: `{{BaseURL}}/api/analytics`
    - Method: POST
    - Body:
      ```json
      {
        "accountReached": 70000,
        "accountEngaged": 1500,
        "adsRun": 8,
        "activePromotions": 3,
        "totalStories": 40
      }
      ```
  - Response:
    ```json
    {
      "id": 2,
      "accountReached": 70000,
      "accountEngaged": 1500,
      "adsRun": 8,
      "activePromotions": 3,
      "totalStories": 40
    }
    ```

### Summary:
This collection includes endpoints to manage users, posts, and analytics for a social media analytics dashboard backend. Each endpoint supports GET and POST methods for retrieving and creating data. Ensure the environment variables are set correctly to interact with the API endpoints seamlessly.
