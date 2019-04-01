# REST API Documentation - User

## User App

REST API built with Express & Sequelize

### Basic Routes

Route  | HTTP | Header(s) |   Body   | Description | Output |
-------|------|-------|-------------|--------|--------|
`/`  | `GET` | none | none | App's top-most route (home) |  |

### User Routes

Route  | HTTP | Header(s) |   Body   | Description | Output |
-------|------|-------|-------------|--------|--------|
`/api/users`  | `GET` | none | none | Get all users info | array of User objects |
`/api/users/:id` | `GET` | none | none | Get single user info | a User object |
`/api/users`  | `POST` | none | username:String (**required**), password:String (**required**), age:integer (**optional**) | Create a user | User object that has been inserted in DB |
`/api/users/:id`  | `DELETE` | none | none | Delete a user | ID of the deleted user |
`/api/users/:id`  | `PUT` | none | username:String (**required**), password:String (**required**), age:integer (**optional**)  | Update a user. All attributes **must** be provided | ID of the updated user |
`/api/users/:id`  | `PATCH` | none | any one of following attributes: <ul><li>username:String</li><li>password:String</li><li>age:Integer</li></ul> | Update a user's specific attribute | | ID of the updated user |