🚀 Backend Internship Assignment — Secure REST API (JWT + CRUD + Swagger)

This project is a scalable backend application built as part of the Backend Developer Internship assignment. It implements secure authentication using JWT, role-based access control, and CRUD APIs for a secondary entity (Tasks). The project also includes API documentation via Swagger and a simple frontend page for testing the APIs.


🏗️ Tech Stack

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

BCrypt Password Hashing

Joi Validation

CORS

Documentation

Swagger UI

Postman (optional)

Frontend (Basic Demo UI)

HTML / CSS / Vanilla JavaScript


📁 Project Structure

Backend-App/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── swagger.js
│   └── app.js
│
├── Fronted/
│   └── index.html
│
├── .env
├── package.json
└── README.md


🔐 Authentication & Authorization

User Registration & Login

Passwords stored securely using bcrypt hashing

JWT-based authentication

Role-based access (user / admin)

Protected routes require a valid token


🗂️ Task Module — CRUD APIs

Each task contains:
title
description
createdBy (User ID)
timestamps

Only authenticated users can perform CRUD operations.


⚙️ Environment Variables

Create a .env file in the project root:

MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000


▶️ Run the Project

Install dependencies:
npm install

Start development server:
npm run dev

Start production mode:
npm start

Server runs at:
http://localhost:5000


📘 API Documentation (Swagger)

Swagger UI available at:
http://localhost:5000/api-docs

Features documented:

Auth APIs

Task CRUD APIs

Request & Response schemas


🧪 Basic Frontend UI (Demo)

A simple frontend page is included to:

Register a user

Login & receive JWT token

Access protected dashboard

Perform CRUD on tasks

Display API responses

File located at:
Fronted/index.html

Open in browser to test the APIs.


🛡️ Security & Best Practices

Password hashing with bcrypt

JWT token validation middleware

Input validation using Joi

CORS enabled

Modular & scalable folder structure

API version-ready structure

**Optional Enhancements (planned / future ready):

Redis caching

Logging & Monitoring

Docker deployment

Microservices-ready architecture


🚀 Scalability Notes

This project follows a structure that supports future scaling:

Modular MVC architecture

Separate layers: routes, controllers, models, middleware

Can be extended into microservices

Supports load balancing & horizontal scaling

MongoDB is suitable for distributed environments


📌 Assignment Deliverables Covered

✔ User Authentication (Register + Login)
✔ JWT & Role-Based Access
✔ Secure Password Hashing
✔ CRUD APIs for Tasks
✔ Protected Routes
✔ Swagger API Documentation
✔ Postman Testing
✔ Basic Frontend UI
✔ Scalability Notes Included


✨ Author

Kranti Holkar
Backend Developer — Internship Assignment Project