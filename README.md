# Mongoose Express CRUD Mastery Assignment

## Project Summary

# Node.js Express Application with TypeScript, MongoDB, and Mongoose

This Node.js Express application is built with TypeScript and leverages MongoDB with Mongoose for robust user data and order management. The implementation integrates bcrypt for secure password hashing and Zod for thorough input validation. The application features a set of eight routes, enabling the creation, retrieval, updating, and deletion of user records, along with seamless management of user orders.

## Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/sakibhasan997/level-2-assignment-2
   ```
2. Navigate to the project directory:
   ```bash
   cd /your-folder
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and set the following environment variables:

   ```env
   PORT=5000
   DB_URL=your_mongodb_url
   BCRYPT=12
   ```

   Replace `your_mongodb_url` with the actual MongoDB URL.

## Running the Application

### Development Mode

Run the application in development mode with automatic code reloading:

```bash
npm run dev
```

Certainly! Below is an updated README file based on your provided information:

markdown
Copy code

# Mongoose Express CRUD Mastery Assignment

## Application Summary

This is a Node.js Express application written in TypeScript, utilizing MongoDB with Mongoose for user data and order management. The application incorporates bcrypt for password hashing and uses Zod for input validation. It provides eight routes for creating, retrieving, updating, and deleting users, as well as managing user orders.

## Local Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/jubayer44/Mongoose-Express-CRUD-Mastery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Mongoose-Express-CRUD-Mastery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and set the following environment variables:

   ```env
   PORT=5000
   DB_URL=your_mongodb_url
   BCRYPT_SALT_ROUNDS=12
   ```

   Replace `your_mongodb_url` with the actual MongoDB URL.

## Running the Application

### Development Mode

Run the application in development mode with automatic code reloading:

```bash
npm run start:ts
Access the application at http://localhost:5000.

Production Mode
Build and run the application in production mode:
```

npm run build

Testing Application
To run linting and prettier :

npm run lint
npm run format

To automatically fix linting and prettier issues:

npm run lint:fix
npm run prettier:fix

API Endpoints
POST /api/users: Create a new user.
GET /api/users: Get all users.
GET /api/users/:userId: Get a single user by ID.
PUT /api/users/:userId: Update a user by ID.
DELETE /api/users/:userId: Delete a user by ID.
PUT /api/users/:userId/orders: Add a new product to a user's orders.
GET /api/users/:userId/orders: Get all orders for a user.
GET /api/users/:userId/orders/total-price: Get the total price of all orders for a user.
