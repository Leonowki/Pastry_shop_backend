import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());

// Test API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(" Connected to MongoDB Atlas"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running! Try /api/hello");
});

// Start server
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
