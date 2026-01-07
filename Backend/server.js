import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./Config/db.js";
import mongoose from "mongoose";
import excelRoutes from "./Routes/excel.routes.js";

dotenv.config();

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// Connect DB
connectDB();


// Server
const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

  app.use("/api/excel", excelRoutes);



