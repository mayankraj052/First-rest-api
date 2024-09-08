# User Management API

This API provides endpoints for managing user data. It allows you to retrieve, update, delete, and add users. The data is initially loaded from a JSON file (`MOCK_DATA.json`), and changes are made in-memory during the server's runtime.

## Table of Contents

- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [Get User by ID](#get-user-by-id)
  - [Update User by ID](#update-user-by-id)
  - [Delete User by ID](#delete-user-by-id)
  - [Add New User](#add-new-user)
  - [Get All Users](#get-all-users)
- [Request and Response Formats](#request-and-response-formats)
- [Error Handling](#error-handling)

## Base URL

The base URL for all endpoints is:
http://localhost:3000

bash
Copy code

## Endpoints

### Get User by ID

**`GET /users/:id`**

Retrieve a user by their ID.

**Request Example:**

```http
GET /users/1
Response Example:

json
Copy code
{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "gender": "Male",
  "Job Title": "Software Engineer"
}
Responses:

200 OK: Returns the user object.
404 Not Found: If the user with the specified ID does not exist.
Update User by ID
PATCH /users/:id

Update details of a user by their ID. Only the fields provided in the request body will be updated.

Request Example:

http
Copy code
PATCH /users/1
Content-Type: application/json

{
  "first_name": "Jane",
  "email": "jane.doe@example.com"
}
Response Example:

json
Copy code
{
  "message": "User updated successfully",
  "user": {
    "id": 1,
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane.doe@example.com",
    "gender": "Male",
    "Job Title": "Software Engineer"
  }
}
Responses:

200 OK: Returns the updated user object.
404 Not Found: If the user with the specified ID does not exist.
Delete User by ID
DELETE /users/:id

Delete a user by their ID.

Request Example:

http
Copy code
DELETE /users/1
Response Example:

json
Copy code
{
  "message": "User deleted successfully"
}
Responses:

200 OK: Confirms the user has been deleted.
404 Not Found: If the user with the specified ID does not exist.
Add New User
POST /addUser

Add a new user. The new user will be assigned a unique ID automatically.

Request Example:

http
Copy code
POST /addUser
Content-Type: application/json

{
  "first_name": "Alice",
  "last_name": "Smith",
  "email": "alice.smith@example.com",
  "gender": "Female",
  "Job Title": "Product Manager"
}
Response Example:

json
Copy code
{
  "message": "added successfully",
  "newUser": {
    "id": 4,
    "first_name": "Alice",
    "last_name": "Smith",
    "email": "alice.smith@example.com",
    "gender": "Female",
    "Job Title": "Product Manager"
  }
}
Responses:

200 OK: Returns the newly added user object.
Get All Users
GET /api/users

Retrieve a list of all users.

Request Example:

http
Copy code
GET /api/users
Response Example:

json
Copy code
[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "gender": "Male",
    "Job Title": "Software Engineer"
  },
  ...
]
Responses:

200 OK: Returns an array of user objects.
Request and Response Formats
Request Headers:

Content-Type: application/json (for POST and PATCH requests)
Response Formats:

All responses are in JSON format.
Error Handling
404 Not Found: Returned when a user with the specified ID does not exist.
400 Bad Request: Ensure all required fields are provided and are in the correct format.
```
