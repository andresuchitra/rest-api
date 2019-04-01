# REST API Documentation - User model

Below are the detailed API info for `User` model.


Route  | HTTP | Input | Description | Output |
-------|------|-------|-------------|--------|
`/api/users`  | `GET` | none | Get all users info | array of User objects |
`/api/users/:id` | `GET` | ID (primary key) | Get single user info | a User object |
`/api/users`  | `POST` | User object (via POST body) | Create a user | User object that has been inserted in DB |
`/api/users/:id`  | `DELETE` | Input | Create a user | ID of the deleted user |
`/api/users/:id`  | `PUT` | User object (complete attributes) | Update a user (all of User attributes) | ID of the target user |
`/api/users/:id`  | `PATCH` | User object (only the changed attributes) | Update a user's specific attribute | ID of the target user |