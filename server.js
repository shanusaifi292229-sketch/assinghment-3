const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to read JSON data
app.use(express.json());
app.use("/api/products", require("./routes/products"));

// Centralized Error Handling Middleware
const errorMiddleware = require("./middleware/errorMiddleware");

app.use(errorMiddleware);

// Connect to MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
    res.send("Inventory Management API is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});