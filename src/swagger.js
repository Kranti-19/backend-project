const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Internship API",
      version: "1.0.0",
      description: "REST API with JWT authentication & tasks CRUD",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
    ],

    // 🔐 Enable JWT Authorize button
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  // 👇 Correct route docs path
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
