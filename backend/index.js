const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routre");

const app = express();
const PORT = 7000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", route);

// MongoDB Connection
const mongoDBURL = "mongodb://127.0.0.1:27017/manale";
mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
