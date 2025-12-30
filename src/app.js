require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const protectedRoutes = require("./routes/protectedRoutes");
app.use("/api/protected", protectedRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

const { swaggerUi, swaggerSpec } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/", (req, res) => res.send("Backend API Running"));

app.listen(5000, () => console.log("Server running on port 5000"));
