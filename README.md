Recipe Management API

This is a backend application for managing recipes. The API allows users to create, read, update, and delete (CRUD) recipes using endpoints. It is built using Node.js, Express.js, and MongoDB.

Features

Create a Recipe: Add new recipes with details like name, description, ingredients, instructions, cooking time, and servings.
Retrieve Recipes: Get all recipes or a specific recipe by its ID.
Update a Recipe: Modify existing recipes by updating one or more fields.
Delete a Recipe: Remove a recipe from the database.

Technologies Used

Node.js: Server-side JavaScript runtime.
Express.js: Web framework for handling routes and requests.
MongoDB: NoSQL database for storing recipe data.
Mongoose: ODM library for interacting with MongoDB.
Postman: API testing tool.

API Endpoints

Recipes
Method	Endpoint	Description
GET	/api/v1/recipes	Get all recipes
GET	/api/v1/recipes/:id	Get a specific recipe by ID
POST	/api/v1/recipes	Create a new recipe
PUT	/api/v1/recipes/:id	Update an existing recipe by ID
DELETE	/api/v1/recipes/:id	Delete a recipe by ID
